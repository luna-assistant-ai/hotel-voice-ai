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

wss.on('connection', async (clientWs) => {
  console.log('🔌 Client connected');

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
      openAiWs.close();
    });

    openAiWs.on('close', () => {
      console.log('🔌 OpenAI connection closed');
      clientWs.close();
    });

    // Handle errors
    clientWs.on('error', (error) => {
      console.error('❌ Client WebSocket error:', error);
      openAiWs.close();
    });

    openAiWs.on('error', (error) => {
      console.error('❌ OpenAI WebSocket error:', error);
      clientWs.close();
    });

  } catch (error) {
    console.error('❌ Failed to create OpenAI session:', error);
    clientWs.close();
  }
});

console.log('🎙️ WebSocket server ready for voice connections');
