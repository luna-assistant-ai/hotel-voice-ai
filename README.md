# 🏨 Hotel Voice AI - Auckland Grand Hotel

A voice-based AI assistant for hotel reservations using OpenAI's Realtime API. This demo showcases a fully functional voice reservation system for a hotel in Auckland, New Zealand.

## ✨ Features

- **🎙️ Real-time Voice Interaction**: Natural conversation with AI using OpenAI's Realtime API
- **📝 Automatic Transcription**: Real-time transcription of both user and AI speech
- **🏨 Complete Booking System**: Create, retrieve, and cancel reservations
- **💰 Dynamic Pricing**: Automatic calculation based on room type and duration
- **📊 Volume Meter**: Visual feedback of microphone input
- **💾 Data Persistence**: Simple JSON-based database for storing bookings
- **🎨 Modern UI**: Beautiful, responsive interface with real-time status updates
- **🔒 Security Controls**: Origin verification, rate limiting, connection tracking
- **✅ Data Validation**: Strict date validation, capacity checks, NaN prevention
- **📊 Inventory Management**: Room availability tracking with overbooking prevention

## 🏗️ Architecture

### Backend (Node.js + Express)
- **WebSocket Relay**: Connects client to OpenAI Realtime API
  - Origin verification (same-origin + localhost only)
  - IP-based rate limiting (10 connections/min, max 3 concurrent)
  - Automatic connection tracking and cleanup
- **Booking Management**: CRUD operations with validation
  - Strict date validation (NaN checks, range validation)
  - Inventory tracking per room type
  - Overbooking prevention with overlap detection
  - Synchronous I/O operations (readFileSync/writeFileSync)
- **Function Calling**: OpenAI function tools integration
  - Initial response trigger (session.updated event)
  - Real-time availability checking against bookings
  - Automatic error handling and recovery
- **Audio Processing**: Handles PCM16 audio streaming at 24kHz

### Frontend (Vanilla JavaScript)
- **Web Audio API**: Captures and processes microphone input
- **WebSocket Client**: Real-time bidirectional communication
- **Audio Playback**: Streams AI voice responses
- **Interactive UI**: Status indicators, transcripts, and controls

## 📋 Prerequisites

- Node.js 18+ (with ES modules support)
- OpenAI API key with Realtime API access
- Modern web browser with microphone access
- HTTPS (required for microphone access in production)

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
HOTEL_NAME=Auckland Grand Hotel
HOTEL_ADDRESS=123 Queen Street, Auckland CBD, New Zealand
HOTEL_PHONE=+64 9 123 4567
HOTEL_EMAIL=reservations@aucklandgrandhotel.co.nz
```

### 3. Run the Application

```bash
npm start
```

Or use watch mode for development:

```bash
npm run dev
```

### 4. Access the Demo

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
├── server/
│   ├── index.js              # Main server & WebSocket relay
│   ├── realtime-handler.js   # OpenAI Realtime API integration
│   ├── booking-manager.js    # Booking CRUD operations
│   └── hotel-config.js       # Hotel & room configuration
├── public/
│   ├── index.html            # Main UI
│   ├── styles.css            # Styling
│   └── app.js                # Client-side JavaScript
├── .env.example              # Environment template
├── .gitignore
├── package.json
├── LICENSE
└── README.md
```

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

Edit `server/realtime-handler.js`, line 23:
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
- Inspired by the need for more natural hotel booking experiences
- Demo hotel concept based on Auckland, New Zealand

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check the troubleshooting section above

## ✨ Recent Improvements (v1.1.0)

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

**Made with ❤️ for demonstration purposes**

**Note**: This is a demo application showcasing OpenAI's Realtime API capabilities. It should not be used in production without proper security measures and enhancements.
