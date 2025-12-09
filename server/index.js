import express from 'express';
import { WebSocketServer } from 'ws';
import { WebSocket } from 'ws';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { appendFile, mkdirSync, existsSync } from 'fs';
import { createRealtimeSession } from './realtime-handler.js';
import {
  createBooking,
  getBooking,
  cancelBooking,
  getAllBookings
} from './booking-manager.js';
import { getRoomTypes } from './hotel-config.js';

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
    // Use client secret endpoint to get an ephemeral key for browser WebRTC
    const response = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        session: {
          type: 'realtime',
          model
        }
      })
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('❌ Failed to create realtime session token:', text);
      return res.status(response.status).json({ error: 'Failed to create realtime session token' });
    }

    const json = await response.json();

    // GA response can be either { client_secret: {...}, url, ice_servers }
    // or { value, expires_at, session } (value is the ek_ token)
    const clientSecret = json.client_secret
      ? json.client_secret
      : json.value
        ? { value: json.value, expires_at: json.expires_at }
        : null;

    res.json({
      model,
      client_secret: clientSecret,
      ice_servers: json.ice_servers,
      url: json.url
    });
  } catch (err) {
    console.error('❌ /api/realtime-token error:', err);
    res.status(500).json({ error: 'Failed to create realtime session token' });
  }
});

// REST API endpoints for booking operations
app.post('/api/bookings', (req, res) => {
  const result = createBooking(req.body);
  if (result.success) {
    res.json({ success: true, data: result.booking, message: result.message });
  } else {
    res.status(400).json({ success: false, error: result.error });
  }
});

app.get('/api/bookings/:confirmationNumber', (req, res) => {
  const result = getBooking(req.params.confirmationNumber);
  if (result.success) {
    res.json({ success: true, data: result.booking });
  } else {
    res.status(404).json({ success: false, error: result.error });
  }
});

app.delete('/api/bookings/:confirmationNumber', (req, res) => {
  const result = cancelBooking(req.params.confirmationNumber);
  if (result.success) {
    res.json({ success: true, message: result.message });
  } else {
    res.status(404).json({ success: false, error: result.error });
  }
});

app.get('/api/availability', (req, res) => {
  const { check_in_date, check_out_date, room_type } = req.query;

  // Validate dates
  const checkIn = new Date(check_in_date);
  const checkOut = new Date(check_out_date);

  if (isNaN(checkIn.getTime())) {
    return res.status(400).json({ success: false, error: 'Invalid check-in date' });
  }

  if (isNaN(checkOut.getTime())) {
    return res.status(400).json({ success: false, error: 'Invalid check-out date' });
  }

  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    return res.status(400).json({ success: false, error: 'Check-out date must be after check-in date' });
  }

  // Check room type validity
  const roomTypes = getRoomTypes();
  const requestedRoom = room_type ? roomTypes.find(r => r.id === room_type) : null;

  if (room_type && !requestedRoom) {
    return res.status(400).json({ success: false, error: 'Invalid room type' });
  }

  // Check actual availability against existing bookings
  const allBookings = getAllBookings();
  const bookings = allBookings.bookings || [];

  const roomsToCheck = room_type ? [requestedRoom] : roomTypes;
  const availableRooms = [];

  for (const room of roomsToCheck) {
    // Count overlapping bookings for this room type
    const overlappingBookings = bookings.filter(booking => {
      if (booking.status !== 'confirmed') return false;
      if (booking.room_type !== room.id) return false;

      const bookingCheckIn = new Date(booking.check_in_date);
      const bookingCheckOut = new Date(booking.check_out_date);

      // Check for date overlap
      return !(checkOut <= bookingCheckIn || checkIn >= bookingCheckOut);
    }).length;

    const inventory = room.inventory || 5;
    const availableCount = inventory - overlappingBookings;

    if (availableCount > 0) {
      availableRooms.push({
        ...room,
        available_count: availableCount
      });
    }
  }

  if (availableRooms.length === 0) {
    return res.json({
      success: true,
      available: false,
      message: `No rooms available for the selected dates (${nights} night(s))`
    });
  }

  res.json({
    success: true,
    available: true,
    rooms: availableRooms,
    nights: nights,
    message: `${availableRooms.length} room type(s) available for ${nights} night(s)`
  });
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
