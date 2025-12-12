# 🏨 Hotel Voice AI - Novotel Auckland Ellerslie

A voice-based AI assistant for hotel reservations using OpenAI's Realtime API. This demo showcases Brantas' advanced Voice AI technology integrated with Novotel Auckland Ellerslie, a premium Accor hotel in New Zealand.

## ✨ Features

- **🎙️ Real-time Voice Interaction**: Natural conversation with AI using OpenAI's Realtime API & Agents SDK
- **🤖 SDK-Native Tools**: Production-ready tools with Zod validation via `@openai/agents`
- **📝 Automatic Transcription**: Real-time transcription of both user and AI speech
- **🏨 Complete Booking System**: Create, retrieve, and cancel reservations via REST API
- **💰 Dynamic Pricing**: Automatic calculation based on room type and duration
- **📊 Volume Meter**: Visual feedback of microphone input
- **💾 Data Persistence**: Simple JSON-based database for storing bookings
- **🎨 Modern UI**: Beautiful, responsive interface with real-time status updates
- **🔒 Security Controls**: Origin verification, rate limiting, connection tracking, ephemeral tokens
- **✅ Data Validation**: Strict Zod schema validation, capacity checks, NaN prevention
- **📊 Inventory Management**: Room availability tracking with overbooking prevention
- **🔄 Multi-Agent Architecture**: Specialized agents with handoffs for complex scenarios (optional)

## 🏗️ Architecture

### Backend (Node.js + Express)
- **Ephemeral Token Service**: Generates secure client secrets for browser WebRTC
  - Uses `client_secrets` endpoint (returns `ek_*` tokens)
  - 60-second token expiration for security
  - No long-lived API keys exposed to browser
- **REST API**: Booking operations endpoints
  - `POST /api/bookings` - Create reservations
  - `GET /api/bookings/:id` - Retrieve booking details
  - `DELETE /api/bookings/:id` - Cancel bookings
  - `GET /api/availability` - Check room availability
- **Security Layer**:
  - Origin verification (same-origin + localhost only)
  - IP-based rate limiting (10 connections/min, max 3 concurrent)
  - Automatic connection tracking and cleanup
- **Booking Management**: CRUD operations with validation
  - Strict date validation (NaN checks, range validation)
  - Inventory tracking per room type
  - Overbooking prevention with overlap detection
  - Synchronous I/O operations (readFileSync/writeFileSync)

### Frontend (TypeScript + OpenAI Agents SDK)
- **RealtimeAgent**: SDK-native voice agent with tools
  - Tool definitions using `tool()` + Zod validation
  - Automatic schema generation and type safety
  - Built-in error handling and retries
- **OpenAIRealtimeWebRTC**: WebRTC transport layer
  - Direct browser-to-OpenAI connection
  - Low-latency audio streaming (PCM16 @ 24kHz)
  - Automatic audio input/output handling
- **RealtimeSession**: Session management
  - Event-driven architecture
  - Real-time transcription and tool execution
  - Graceful error recovery
- **Interactive UI**: Status indicators, transcripts, and controls

## 📋 Prerequisites

- Node.js 22+ (recommended for @openai/agents SDK)
- OpenAI API key with Realtime API access
- Modern web browser with microphone access
- HTTPS (required for microphone access in production)
- npm or yarn for package management

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/luna-assistant-ai/hotel-voice-ai.git
cd hotel-voice-ai
npm install
```

### 2. Configure Environment

Create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
HOTEL_NAME=Novotel Auckland Ellerslie
HOTEL_ADDRESS=72-112 Greenlane Road East, Ellerslie, Auckland 1051
HOTEL_PHONE=+64 9 529 9530
HOTEL_EMAIL=H6167@accor.com
```

### 3. Build the Frontend

Build the TypeScript bundle:

```bash
npm run build
```

This compiles `src/main.ts` → `public/bundle.js` using esbuild.

### 4. Run the Application

```bash
npm start
```

Or use watch mode for development:

```bash
npm run dev
```

For frontend development with auto-rebuild:

```bash
npm run build:watch
```

### 5. Access the Demo

Open your browser and navigate to:
```
http://localhost:3000
```

**Note**: For microphone access, you may need to use HTTPS in production. For local development, localhost is typically allowed.

## 📖 Usage Guide

### Making a Reservation

1. Click **"Start Voice Assistant"**
2. Allow microphone access when prompted
3. Speak naturally to the AI assistant:
   - "Hello, I'd like to make a reservation"
   - "I need a room for 2 people from December 15th to December 18th"
   - "What room types do you have available?"
4. The AI will guide you through the booking process
5. You'll receive a confirmation number when the booking is complete

### Available Commands

The AI assistant can handle:
- **Making reservations**: "I want to book a room"
- **Checking availability**: "Are there rooms available next week?"
- **Retrieving bookings**: "I have confirmation number AKL-12345"
- **Canceling bookings**: "I need to cancel my reservation"
- **Hotel information**: "What amenities do you have?"
- **Room details**: "Tell me about the suite"

## 🏨 Room Types

| Room Type | Price (NZD) | Capacity | Inventory | Features |
|-----------|-------------|----------|-----------|----------|
| Standard Room | $180/night | 2 guests | 20 rooms | Queen bed, City view |
| Deluxe Room | $280/night | 3 guests | 15 rooms | King bed, Harbor view |
| Executive Suite | $450/night | 4 guests | 8 rooms | Separate living area, Panoramic views |
| Penthouse Suite | $850/night | 6 guests | 2 rooms | Multiple rooms, 360° views, Butler service |

## 🗂️ Project Structure

```
hotel-voice-ai/
├── src/                      # TypeScript source (SDK implementation)
│   ├── main.ts              # Entry point - RealtimeSession setup
│   ├── agents.ts            # Agent definitions with handoffs
│   ├── tools.ts             # SDK tools with Zod validation
│   ├── booking-api.ts       # REST API client
│   └── hotel-config.ts      # Hotel & room configuration
├── server/                   # Node.js backend
│   ├── index.js             # Express server + REST API + Token service
│   ├── realtime-handler.js  # WebSocket relay (used by legacy WebSocket connections)
│   ├── booking-manager.js   # Booking CRUD operations
│   └── hotel-config.js      # Hotel configuration
├── public/
│   ├── index.html           # Main UI
│   ├── styles.css           # Styling
│   ├── bundle.js            # Compiled TypeScript (generated)
│   ├── bundle.js.map        # Source map (generated)
│   ├── app.js               # Legacy client (optional)
│   └── audio-processor.js   # Legacy audio processor (optional)
├── build.mjs                # esbuild configuration
├── esbuild.config.mjs       # esbuild config (alternative)
├── test.sh                  # Test script
├── .env.example             # Environment template
├── .gitignore
├── package.json
├── LICENSE
└── README.md
```

### Architecture Layers

**SDK Layer (Recommended - Default)**:
- `src/` - TypeScript implementation using `@openai/agents`
- Compiled to `public/bundle.js` via esbuild
- Production-ready tools with Zod validation
- Direct WebRTC to OpenAI (low latency)
- Used by default when you access the application

**WebSocket Layer (Active for backward compatibility)**:
- `server/realtime-handler.js` - WebSocket relay implementation
- `server/index.js` maintains WebSocket server on port 3000
- Used by legacy clients or custom WebSocket implementations
- Runs in parallel with SDK implementation

## 🔧 API Functions

The AI assistant has access to these functions:

### `create_booking`
Creates a new hotel reservation.

**Parameters:**
- `guest_name`: Full name
- `guest_email`: Email address
- `guest_phone`: Phone number (optional)
- `check_in_date`: YYYY-MM-DD format
- `check_out_date`: YYYY-MM-DD format
- `room_type`: standard | deluxe | suite | penthouse
- `number_of_guests`: Integer
- `special_requests`: Text (optional)

### `get_booking`
Retrieves booking details.

**Parameters:**
- `confirmation_number`: Booking confirmation number

### `cancel_booking`
Cancels an existing booking.

**Parameters:**
- `confirmation_number`: Booking confirmation number

### `check_availability`
Checks room availability.

**Parameters:**
- `check_in_date`: YYYY-MM-DD format
- `check_out_date`: YYYY-MM-DD format
- `room_type`: Room type (optional)

### `get_hotel_info`
Provides detailed hotel and room information.

**Parameters:**
- None (no parameters required)

**Returns:**
- Hotel details (name, address, phone, email, amenities)
- Complete room types list with pricing and features

## 💾 Data Storage

### Current Implementation

Bookings are stored in `server/database.json` using synchronous file operations.

**Technical Details:**
- **Location**: `server/database.json` (absolute path)
- **Format**: JSON with pretty-print formatting
- **I/O**: Synchronous (`readFileSync`/`writeFileSync`)
- **Initialization**: Automatic creation if file doesn't exist
- **Validation**: All writes include error handling

**Structure:**

```json
{
  "bookings": [
    {
      "confirmation_number": "AKL-ABC123",
      "guest_name": "John Smith",
      "guest_email": "john@example.com",
      "guest_phone": "+64 21 123 4567",
      "check_in_date": "2024-12-15",
      "check_out_date": "2024-12-18",
      "room_type": "deluxe",
      "room_name": "Deluxe Room",
      "number_of_guests": 2,
      "number_of_nights": 3,
      "price_per_night": 280,
      "total_price": 840,
      "special_requests": "High floor preferred",
      "status": "confirmed",
      "created_at": "2024-12-08T10:30:00.000Z"
    }
  ]
}
```

### Limitations (Demo Only)

⚠️ **Current JSON storage has limitations:**
- ❌ No concurrent write protection (race conditions possible)
- ❌ No transactions (partial writes on crash)
- ❌ Event loop blocking on large files (synchronous I/O)
- ❌ No built-in backup/restore
- ❌ Limited query capabilities

### Production Recommendations

For production use, migrate to a proper database:

**PostgreSQL** (Recommended):
```javascript
// Example with node-postgres
import pg from 'pg';
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

export async function createBooking(data) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // Transactional booking creation
    const result = await client.query(
      'INSERT INTO bookings (...) VALUES (...) RETURNING *',
      [...]
    );
    await client.query('COMMIT');
    return result.rows[0];
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}
```

**Benefits:**
- ✅ ACID transactions
- ✅ Concurrent access handling
- ✅ Advanced queries and indexes
- ✅ Built-in backup and replication
- ✅ Connection pooling

## 🎨 Customization

### Modify Hotel Information

Edit `server/hotel-config.js` to customize:
- Hotel name and location
- Room types and pricing
- Amenities
- Check-in/check-out times

### Change AI Voice

Edit `server/realtime-handler.js`, line 35:
```javascript
voice: 'alloy' // Options: alloy, echo, shimmer
```

### Adjust AI Instructions

Modify the `getSystemInstructions()` function in `server/realtime-handler.js` to change how the AI behaves.

## 🔒 Security & Validation

### ✅ Already Implemented

**WebSocket Security:**
- ✅ Origin verification (same-origin policy + localhost)
- ✅ IP-based rate limiting (10 connections per minute)
- ✅ Concurrent connection limits (max 3 per IP)
- ✅ Automatic connection tracking and cleanup
- ✅ Graceful error handling and disconnection

**Data Validation:**
- ✅ Date validation (NaN checks, range verification)
- ✅ Guest capacity validation against room limits
- ✅ Room type validation
- ✅ Booking overlap detection
- ✅ Inventory tracking and overbooking prevention

**Database:**
- ✅ Absolute path resolution (works from any directory)
- ✅ Automatic database initialization
- ✅ Error handling with fallbacks

### ⚠️ Required for Production

This is a **demo application**. For production deployment, you must add:

- 🔐 User authentication and authorization
- 💳 Payment processing integration
- 📧 Email confirmation system
- 🗄️ Production database (PostgreSQL/MongoDB) with ACID transactions
- 🔒 HTTPS enforcement (TLS/SSL certificates)
- 🔑 Secure secret management (AWS Secrets Manager, Vault)
- 📊 Monitoring and error tracking (Sentry, DataDog)
- 🔄 Backup and disaster recovery
- 📝 Audit logging
- 🛡️ SQL injection prevention (use parameterized queries)
- 🚦 Advanced rate limiting (distributed, per-user)
- 🌐 CDN for static assets

## 🐛 Troubleshooting

### Microphone Not Working
- Ensure you've granted microphone permissions
- Check browser console for errors
- Try using HTTPS (required for microphone in some browsers)
- Reload the page and try again

### Connection Failed
- Verify your OpenAI API key is correct in `.env`
- Check that you have Realtime API access enabled
- Ensure port 3000 is not already in use
- Check firewall settings

### Rate Limit Exceeded
**Error**: `🚫 Rate limit exceeded for IP`
- **Cause**: More than 10 connection attempts in 1 minute
- **Solution**: Wait 60 seconds before reconnecting
- **Limit**: 10 connections per minute per IP address
- **Note**: Limit resets automatically after 1 minute

### Too Many Connections
**Error**: `🚫 Too many concurrent connections`
- **Cause**: More than 3 simultaneous connections from same IP
- **Solution**: Close existing connections before opening new ones
- **Limit**: Maximum 3 concurrent connections per IP
- **How to fix**: Refresh the page or wait for existing connections to close

### Unauthorized Origin
**Error**: `🚫 Rejected connection from unauthorized origin`
- **Cause**: WebSocket connection from non-localhost or different origin
- **Solution**: Access the app from `http://localhost:3000` directly
- **Note**: For production, configure allowed origins in `server/index.js`
- **Reverse proxy**: Ensure Origin/Referer headers are properly forwarded

### Audio Not Playing
- Check browser audio settings and volume
- Verify your speakers/headphones are working
- Look for errors in the browser console
- Try a different browser (Chrome/Edge recommended)

### Function Calls Not Working
- Check server console for function call logs
- Verify `database.json` has write permissions
- Ensure dates are in YYYY-MM-DD format
- Check that room type is valid (standard/deluxe/suite/penthouse)

### Booking Validation Errors
**Invalid dates**: Dates must be in YYYY-MM-DD format and not NaN
**Check-out before check-in**: Check-out must be after check-in date
**Room not available**: No inventory for selected dates/room type
**Exceeds capacity**: Number of guests exceeds room capacity

## 📝 Development

### Running in Development Mode

```bash
npm run dev
```

This uses Node's `--watch` flag to automatically restart on file changes.

### Testing Function Calls

Monitor the console output to see:
- WebSocket connections
- Function calls with parameters
- Booking operations
- Errors and warnings

## 🤝 Contributing

This is a demo project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [OpenAI Realtime API](https://platform.openai.com/docs/api-reference/realtime)
- Voice AI technology provided by [Brantas](https://brantas.co.nz)
- Demo implementation for Novotel Auckland Ellerslie (Accor Hotels)
- Inspired by the need for more natural hotel booking experiences in the hospitality industry

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check the troubleshooting section above

## ✨ Recent Improvements (v2.0.0 - SDK Migration)

### 🚀 OpenAI Agents SDK Integration
- ✅ **Full SDK Migration**: Migrated to `@openai/agents` v0.3.4
- ✅ **Tool Definitions with Zod**: Production-ready tools using `tool()` + Zod schemas
- ✅ **TypeScript Architecture**: Type-safe codebase with full IntelliSense support
- ✅ **REST API Backend**: Secure booking operations via Express endpoints
- ✅ **Ephemeral Token Security**: Client secrets (`ek_*`) with 60s expiration
- ✅ **Multi-Agent Support**: Optional handoffs between specialized agents
- ✅ **Build Pipeline**: Automated TypeScript compilation with esbuild

### 🔧 Technical Improvements
- ✅ **Schema Validation**: Automatic request/response validation via Zod
- ✅ **Error Handling**: Built-in retry logic and graceful error recovery
- ✅ **WebRTC Transport**: Direct browser-to-OpenAI connection (lower latency)
- ✅ **Tool Execution Tracking**: Real-time visibility into tool calls
- ✅ **Modular Architecture**: Separated concerns (agents, tools, API client)

### 📝 Developer Experience
- ✅ **Hot Reload**: `npm run build:watch` for frontend development
- ✅ **Source Maps**: Full debugging support in browser DevTools
- ✅ **Type Safety**: End-to-end TypeScript with no `any` types
- ✅ **Documentation**: Comprehensive inline JSDoc comments

**Migration Notes**:
- SDK tools replace legacy JSON function definitions
- WebSocket relay (`realtime-handler.js`) kept for backward compatibility
- All bookings now go through REST API for better security
- Workaround patches for `getEnabledHandoffs` included (SDK v0.3.4 limitation)

---

## ✨ Previous Improvements (v1.1.0)

### Security Enhancements
- ✅ **WebSocket Origin Verification**: Prevents unauthorized access from external domains
- ✅ **IP-based Rate Limiting**: Limits to 10 connections per minute per IP
- ✅ **Concurrent Connection Control**: Maximum 3 simultaneous connections per IP
- ✅ **Connection Tracking**: Automatic cleanup and graceful disconnection handling

### Data Validation
- ✅ **Date Validation**: Strict NaN checks prevent invalid date calculations
- ✅ **Overbooking Prevention**: Real-time inventory tracking with overlap detection
- ✅ **Input Sanitization**: Comprehensive validation of all booking parameters
- ✅ **Error Messages**: Clear, actionable error messages for users

### Bug Fixes
- ✅ **Fixed async/await bug**: `getAllBookings()` now returns synchronously (was returning Promise)
- ✅ **Fixed availability check**: Now correctly considers existing bookings
- ✅ **Fixed database path**: Uses absolute path resolution (works from any directory)
- ✅ **Fixed first response**: Initial `response.create` trigger ensures AI responds immediately

### Performance
- ✅ **Synchronous I/O**: Consistent sync operations (removed false async declarations)
- ✅ **Optimized availability checking**: Efficient overlap detection algorithm
- ✅ **Connection cleanup**: Automatic timestamp cleanup every 60 seconds

**Commit**: `379b383` (merged into main)

## 🚀 Future Enhancements

Potential improvements for this demo:
- [ ] Multi-language support
- [ ] Calendar integration
- [ ] Payment processing
- [ ] Email confirmations
- [ ] SMS notifications
- [ ] Room availability calendar
- [ ] Admin dashboard
- [ ] Booking modifications
- [ ] Special offers and promotions
- [ ] Loyalty program integration

---

**Developed by [Brantas](https://brantas.co.nz) - Voice AI demonstration for Accor Hotels**

**About Brantas**: Brantas is a leading hospitality technology solutions provider in the South Pacific, offering innovative solutions including Voice AI assistants, security systems, energy management, and more to hotels, resorts, and accommodation venues across New Zealand, Fiji, Cook Islands, Samoa, Tahiti, New Caledonia, Vanuatu, and Papua New Guinea.

**About this Demo**: This application could demonstrate how Brantas' advanced Voice AI technology capabilities can be specifically tailored for the hospitality industry. Built as a proof-of-concept for Accor Hotels, it showcases how natural voice interactions could transform the guest booking experience at premium properties like Novotel Auckland Ellerslie, with potential for deployment across Accor's global hotel portfolio.

**Note**: This is a demonstration application. Production deployment would require additional security measures, payment integration, and enterprise-grade infrastructure.
