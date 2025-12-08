import express from 'express';
import { WebSocketServer } from 'ws';
import { WebSocket } from 'ws';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRealtimeSession } from './realtime-handler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

  try {
    // Create OpenAI Realtime API session
    const openAiWs = await createRealtimeSession();

    // Forward messages from client to OpenAI
    clientWs.on('message', (message) => {
      const data = message.toString();
      console.log('📤 Client -> OpenAI:', data.substring(0, 100));

      if (openAiWs.readyState === WebSocket.OPEN) {
        openAiWs.send(data);
      }
    });

    // Forward messages from OpenAI to client
    openAiWs.on('message', (message) => {
      const data = message.toString();
      console.log('📥 OpenAI -> Client:', data.substring(0, 100));

      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(data);
      }
    });

    // Handle disconnections
    clientWs.on('close', () => {
      console.log('🔌 Client disconnected');
      // Decrement connection count
      const count = connectionsByIP.get(clientIP) || 0;
      if (count > 0) {
        connectionsByIP.set(clientIP, count - 1);
      }
      openAiWs.close();
    });

    openAiWs.on('close', () => {
      console.log('🔌 OpenAI connection closed');
      clientWs.close();
    });

    // Handle errors
    clientWs.on('error', (error) => {
      console.error('❌ Client WebSocket error:', error);
      // Decrement connection count
      const count = connectionsByIP.get(clientIP) || 0;
      if (count > 0) {
        connectionsByIP.set(clientIP, count - 1);
      }
      openAiWs.close();
    });

    openAiWs.on('error', (error) => {
      console.error('❌ OpenAI WebSocket error:', error);
      clientWs.close();
    });

  } catch (error) {
    console.error('❌ Failed to create OpenAI session:', error);
    // Decrement connection count
    const count = connectionsByIP.get(clientIP) || 0;
    if (count > 0) {
      connectionsByIP.set(clientIP, count - 1);
    }
    clientWs.close();
  }
});

console.log('🎙️ WebSocket server ready for voice connections');
