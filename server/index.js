import express from 'express';
import { WebSocketServer } from 'ws';
import { WebSocket } from 'ws';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { appendFile, mkdirSync, existsSync } from 'fs';
import { createRealtimeSession } from './realtime-handler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const LOG_DIR = join(__dirname, '../logs');
const LOG_FILE = join(LOG_DIR, 'conversations.log');

if (!existsSync(LOG_DIR)) {
  mkdirSync(LOG_DIR, { recursive: true });
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, '../public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Hotel Voice AI' });
});

// Endpoint to create short-lived Realtime session token (for WebRTC/Agents SDK)
app.post('/api/realtime-token', async (req, res) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'Missing OPENAI_API_KEY on server' });
    }

    const model = req.body?.model || 'gpt-4o-realtime-preview-2024-12-17';
    const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({ model })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('❌ Failed to create realtime session token:', text);
      return res.status(response.status).json({ error: 'Failed to create realtime session token' });
    }

    const json = await response.json();
    // Return only the data needed by the client (no API key exposure)
    res.json({
      model,
      client_secret: json.client_secret,
      ice_servers: json.ice_servers,
      url: json.url
    });
  } catch (err) {
    console.error('❌ /api/realtime-token error:', err);
    res.status(500).json({ error: 'Failed to create realtime session token' });
  }
});

// Start HTTP server
const server = app.listen(PORT, () => {
  console.log(`🏨 Hotel Voice AI server running on port ${PORT}`);
  console.log(`📝 Open http://localhost:${PORT} to access the demo`);
});

// WebSocket server for OpenAI Realtime API
const wss = new WebSocketServer({ server });

// Rate limiting and connection tracking
const connectionsByIP = new Map(); // IP -> count
const connectionTimestamps = new Map(); // IP -> [timestamps]
const MAX_CONNECTIONS_PER_IP = 3;
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_CONNECTIONS_PER_WINDOW = 10;

// Cleanup old timestamps periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of connectionTimestamps.entries()) {
    const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    if (recentTimestamps.length === 0) {
      connectionTimestamps.delete(ip);
    } else {
      connectionTimestamps.set(ip, recentTimestamps);
    }
  }
}, 60000);

wss.on('connection', async (clientWs, req) => {
  const sessionId = `sess-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`;
  // Get client IP
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0].trim() ||
                   req.socket.remoteAddress;

  // Verify origin (allow only same-origin or localhost in development)
  const origin = req.headers.origin || req.headers.referer;
  const isLocalhost = origin?.includes('localhost') || origin?.includes('127.0.0.1');
  const isSameOrigin = origin?.startsWith(`http://${req.headers.host}`) ||
                       origin?.startsWith(`https://${req.headers.host}`);

  if (!isLocalhost && !isSameOrigin) {
    console.log(`🚫 Rejected connection from unauthorized origin: ${origin}`);
    clientWs.close(1008, 'Unauthorized origin');
    return;
  }

  // Rate limiting check
  const now = Date.now();
  const timestamps = connectionTimestamps.get(clientIP) || [];
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_CONNECTIONS_PER_WINDOW) {
    console.log(`🚫 Rate limit exceeded for IP: ${clientIP}`);
    clientWs.close(1008, 'Rate limit exceeded');
    return;
  }

  // Connection limit check
  const currentConnections = connectionsByIP.get(clientIP) || 0;
  if (currentConnections >= MAX_CONNECTIONS_PER_IP) {
    console.log(`🚫 Too many concurrent connections from IP: ${clientIP}`);
    clientWs.close(1008, 'Too many connections');
    return;
  }

  // Track connection
  recentTimestamps.push(now);
  connectionTimestamps.set(clientIP, recentTimestamps);
  connectionsByIP.set(clientIP, currentConnections + 1);

  console.log(`🔌 Client connected from ${clientIP} (${currentConnections + 1}/${MAX_CONNECTIONS_PER_IP})`);
  logConversation(sessionId, 'info', `client connected from ${clientIP}`);

  try {
    // Create OpenAI Realtime API session
    const openAiWs = await createRealtimeSession();

    // Forward messages from client to OpenAI
    clientWs.on('message', (message) => {
      const data = message.toString();
      console.log('📤 Client -> OpenAI:', data.substring(0, 100));
      logConversation(sessionId, 'client->openai', summarizeMessage(data));

      if (openAiWs.readyState === WebSocket.OPEN) {
        openAiWs.send(data);
      }
    });

    // Forward messages from OpenAI to client
    openAiWs.on('message', (message) => {
      const data = message.toString();
      console.log('📥 OpenAI -> Client:', data.substring(0, 100));
      logConversation(sessionId, 'openai->client', summarizeMessage(data));

      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(data);
      }
    });

    // Handle disconnections
    clientWs.on('close', () => {
      console.log('🔌 Client disconnected');
      logConversation(sessionId, 'info', 'client disconnected');
      // Decrement connection count
      const count = connectionsByIP.get(clientIP) || 0;
      if (count > 0) {
        connectionsByIP.set(clientIP, count - 1);
      }
      openAiWs.close();
    });

    openAiWs.on('close', () => {
      console.log('🔌 OpenAI connection closed');
      logConversation(sessionId, 'info', 'openai connection closed');
      clientWs.close();
    });

    // Handle errors
    clientWs.on('error', (error) => {
      console.error('❌ Client WebSocket error:', error);
      logConversation(sessionId, 'error', `client ws error: ${error.message}`);
      // Decrement connection count
      const count = connectionsByIP.get(clientIP) || 0;
      if (count > 0) {
        connectionsByIP.set(clientIP, count - 1);
      }
      openAiWs.close();
    });

    openAiWs.on('error', (error) => {
      console.error('❌ OpenAI WebSocket error:', error);
      logConversation(sessionId, 'error', `openai ws error: ${error.message}`);
      clientWs.close();
    });

  } catch (error) {
    console.error('❌ Failed to create OpenAI session:', error);
    logConversation(sessionId, 'error', `failed to create session: ${error.message}`);
    // Decrement connection count
    const count = connectionsByIP.get(clientIP) || 0;
    if (count > 0) {
      connectionsByIP.set(clientIP, count - 1);
    }
    clientWs.close();
  }
});

console.log('🎙️ WebSocket server ready for voice connections');

function logConversation(sessionId, direction, message) {
  const line = `[${new Date().toISOString()}][${sessionId}][${direction}] ${message}\n`;
  appendFile(LOG_FILE, line, (err) => {
    if (err) {
      console.error('❌ Failed to write log:', err);
    }
  });
}

function summarizeMessage(rawData) {
  try {
    const msg = JSON.parse(rawData);
    let summary = msg.type || 'unknown';

    if (msg.type === 'conversation.item.input_audio_transcription.completed') {
      summary += ` text="${(msg.transcript || '').slice(0, 120)}"`;
    } else if (msg.type === 'response.audio_transcript.delta' || msg.type === 'response.audio_transcript.done') {
      summary += ` text="${(msg.delta || msg.transcript || '').slice(0, 120)}"`;
    } else if (msg.type === 'response.function_call_arguments.done') {
      summary += ` func=${msg.name || msg.call_id || 'unknown'}`;
    } else if (msg.type === 'response.audio.delta' && msg.delta) {
      summary += ` audio_len=${msg.delta.length}`;
    } else if (msg.type === 'error' && msg.error) {
      summary += ` ${msg.error.message || ''}`;
    }

    return summary;
  } catch {
    return `raw="${rawData.substring(0, 120)}"`;
  }
}
