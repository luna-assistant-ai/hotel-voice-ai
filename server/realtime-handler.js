import dotenv from 'dotenv';
import WebSocket from 'ws';
import { getHotelInfo, getRoomTypes } from './hotel-config.js';
import {
  createBooking,
  getBooking,
  getAllBookings,
  updateBooking,
  cancelBooking
} from './booking-manager.js';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const DEFAULT_REALTIME_MODEL =
  process.env.OPENAI_REALTIME_MODEL || 'gpt-4o-realtime-preview-2024-12-17';
const OPENAI_REALTIME_URL = `wss://api.openai.com/v1/realtime?model=${encodeURIComponent(DEFAULT_REALTIME_MODEL)}`;

export async function createRealtimeSession() {
  const openAiWs = new WebSocket(OPENAI_REALTIME_URL, {
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'OpenAI-Beta': 'realtime=v1'
    }
  });

  return new Promise((resolve, reject) => {
    openAiWs.on('open', () => {
      console.log('✅ Connected to OpenAI Realtime API');

      // Configure the session
      const sessionConfig = {
        type: 'session.update',
        session: {
          modalities: ['text', 'audio'],
          instructions: getSystemInstructions(),
          voice: 'alloy',
          input_audio_format: 'pcm16',
          output_audio_format: 'pcm16',
          input_audio_transcription: {
            model: 'whisper-1'
          },
          turn_detection: {
            type: 'server_vad',
            threshold: 0.5,
            prefix_padding_ms: 300,
            silence_duration_ms: 500
          },
          tools: getTools(),
          tool_choice: 'auto',
          temperature: 0.8
        }
      };

      openAiWs.send(JSON.stringify(sessionConfig));

      // Handle incoming messages
      openAiWs.on('message', async (message) => {
        const event = JSON.parse(message.toString());

        // Trigger initial response after session is updated
        if (event.type === 'session.updated') {
          console.log('✅ Session updated, triggering initial response');
          openAiWs.send(JSON.stringify({ type: 'response.create' }));
        }

        if (event.type === 'response.function_call_arguments.done') {
          await handleFunctionCall(openAiWs, event);
        }
      });

      resolve(openAiWs);
    });

    openAiWs.on('error', (error) => {
      console.error('❌ OpenAI WebSocket error:', error);
      reject(error);
    });
  });
}

function getSystemInstructions() {
  const hotelInfo = getHotelInfo();
  const roomTypes = getRoomTypes();

  return `You are an elegant and attentive voice concierge for ${hotelInfo.name}, a distinguished property in ${hotelInfo.location}.

Your mission is to create an exceptional, personalized booking experience that reflects our commitment to premium hospitality—the hallmark of world-class hotel groups like Accor.

═══════════════════════════════════════════════════
HOTEL INFORMATION
═══════════════════════════════════════════════════
🏨 ${hotelInfo.name}
📍 ${hotelInfo.location}
📞 ${hotelInfo.phone}
✉️ ${hotelInfo.email}

⏰ Check-in: ${hotelInfo.checkInTime} | Check-out: ${hotelInfo.checkOutTime}

ACCOMMODATIONS:
${roomTypes.map(room => `• ${room.name}: ${room.description}\n  → $${room.price} NZD per night | Up to ${room.capacity} guests`).join('\n')}

SIGNATURE AMENITIES:
${hotelInfo.amenities.join(' • ')}

═══════════════════════════════════════════════════
VOICE & TONE (Premium Hospitality Standard)
═══════════════════════════════════════════════════
✓ Warm yet refined—like a personal concierge, not a robot
✓ Proactive: Anticipate needs before guests ask
✓ Conversational: Natural pauses, confirmations ("Absolutely," "Wonderful choice")
✓ Empathetic: Acknowledge special occasions, preferences, concerns
✓ Confident but humble: "I'd be delighted to assist" vs. "I can help"

═══════════════════════════════════════════════════
CONVERSATION FLOW (Guest-Centric Approach)
═══════════════════════════════════════════════════
1. WELCOME (10-15 seconds)
   "Good [morning/afternoon/evening]! Thank you for contacting ${hotelInfo.name}.
   My name is [your name], and I'm delighted to assist with your reservation today.
   May I start by asking your name?"

2. DISCOVER NEEDS (Active Listening)
   • Purpose of visit? (Business/Leisure/Special occasion)
   • Travel dates & flexibility
   • Number of guests (adults/children)
   • Preferences: View, floor, bed type, accessibility

3. PERSONALIZED RECOMMENDATIONS
   ✗ DON'T: "We have Standard, Deluxe, Suite, Penthouse."
   ✓ DO: "For a romantic getaway for two, I'd recommend our Deluxe Room with
         harbor views—it's particularly stunning at sunset. Alternatively,
         our Executive Suite offers extra space if you'd like a living area."

4. TRANSPARENT PRICING
   • Always state: "Your [X]-night stay from [date] to [date] would be $[total] NZD,
     which includes all taxes and fees."
   • Mention value-adds: "This also includes complimentary WiFi, pool access, and
     our signature breakfast buffet."

5. SEAMLESS BOOKING
   • Collect: Full name, email, phone, special requests
   • Confirm verbally: "Let me confirm: [repeat details]—does that sound perfect?"
   • After booking: "Wonderful! Your confirmation number is [XXX]. You'll receive
     an email shortly at [email]. Is there anything else I can arrange?"

6. ANTICIPATE & UPSELL (Subtly)
   • "Will you need airport transfer? We offer private car service."
   • "I notice you're arriving late—shall I arrange a welcome amenity in your room?"
   • "For your anniversary, might I suggest our spa package?"

═══════════════════════════════════════════════════
CRITICAL RULES (Non-Negotiable)
═══════════════════════════════════════════════════
⚠️ VALIDATION:
  - Dates: Always confirm DD/MM/YYYY format before booking
  - Logic: Check-out > Check-in
  - Capacity: Guest count ≤ Room capacity
  - Availability: Use check_availability tool BEFORE confirming rates

⚠️ ERROR HANDLING:
  - If unclear: "I want to make sure I have this correct—could you please repeat [X]?"
  - If unavailable: "I see we're fully booked for [room] those dates. May I suggest
    [alternative dates] or our [alternative room]?"

⚠️ NEVER:
  - Use robotic phrases: "Your call is important to us"
  - Rush the guest: "Anything else?" before they're ready
  - Apologize excessively: One "my apologies" is enough
  - Mention technical limitations or "I'm an AI"

═══════════════════════════════════════════════════
EXAMPLE DIALOGUES (Accor-Level Service)
═══════════════════════════════════════════════════

Guest: "Hi, I need a room for next weekend."

✗ BASIC: "Sure. What dates and how many guests?"

✓ PREMIUM: "Wonderful! I'd love to help arrange that for you. Next weekend—would
that be Friday the 15th through Sunday the 17th? And may I ask, is this for
a special occasion or more of a relaxing getaway?"

───────────────────────────────────────────────────

Guest: "Do you have availability December 20-25?"

✗ BASIC: "Let me check... yes, we have rooms."

✓ PREMIUM: "Ah, the holiday season—a magical time at ${hotelInfo.name}!
Let me check our availability for December 20th to 25th. May I ask how
many guests will be joining you? [Pause for answer]. Perfect. I'm checking
now... Yes, I'm pleased to confirm we have availability. For a 5-night
holiday stay, might I suggest our Executive Suite? It offers extra space
for festive relaxation, and the harbor views are particularly enchanting
with the holiday lights."

═══════════════════════════════════════════════════

Remember: Every interaction is an opportunity to exceed expectations. You represent
a premium brand—ensure every word reflects that commitment to excellence.`;
}

function getTools() {
  return [
    {
      type: 'function',
      name: 'create_booking',
      description: 'Creates a new hotel reservation after confirming all details with the guest',
      parameters: {
        type: 'object',
        properties: {
          guest_name: {
            type: 'string',
            description: 'Full name of the guest'
          },
          guest_email: {
            type: 'string',
            description: 'Email address of the guest'
          },
          guest_phone: {
            type: 'string',
            description: 'Phone number of the guest'
          },
          check_in_date: {
            type: 'string',
            description: 'Check-in date in YYYY-MM-DD format'
          },
          check_out_date: {
            type: 'string',
            description: 'Check-out date in YYYY-MM-DD format'
          },
          room_type: {
            type: 'string',
            enum: ['standard', 'deluxe', 'suite', 'penthouse'],
            description: 'Type of room to book'
          },
          number_of_guests: {
            type: 'integer',
            description: 'Number of guests staying'
          },
          special_requests: {
            type: 'string',
            description: 'Any special requests from the guest'
          }
        },
        required: ['guest_name', 'guest_email', 'check_in_date', 'check_out_date', 'room_type', 'number_of_guests']
      }
    },
    {
      type: 'function',
      name: 'get_booking',
      description: 'Retrieves booking details using a confirmation number',
      parameters: {
        type: 'object',
        properties: {
          confirmation_number: {
            type: 'string',
            description: 'The booking confirmation number'
          }
        },
        required: ['confirmation_number']
      }
    },
    {
      type: 'function',
      name: 'cancel_booking',
      description: 'Cancels an existing booking',
      parameters: {
        type: 'object',
        properties: {
          confirmation_number: {
            type: 'string',
            description: 'The booking confirmation number to cancel'
          }
        },
        required: ['confirmation_number']
      }
    },
    {
      type: 'function',
      name: 'check_availability',
      description: 'Checks room availability for specific dates',
      parameters: {
        type: 'object',
        properties: {
          check_in_date: {
            type: 'string',
            description: 'Check-in date in YYYY-MM-DD format'
          },
          check_out_date: {
            type: 'string',
            description: 'Check-out date in YYYY-MM-DD format'
          },
          room_type: {
            type: 'string',
            enum: ['standard', 'deluxe', 'suite', 'penthouse'],
            description: 'Type of room to check'
          }
        },
        required: ['check_in_date', 'check_out_date']
      }
    }
  ];
}

async function handleFunctionCall(ws, event) {
  const functionName = event.name;
  const args = JSON.parse(event.arguments);
  const callId = event.call_id;

  console.log(`🔧 Function call: ${functionName}`, args);

  let result;

  try {
    switch (functionName) {
      case 'create_booking':
        result = createBooking(args);
        break;

      case 'get_booking':
        result = getBooking(args.confirmation_number);
        break;

      case 'cancel_booking':
        result = cancelBooking(args.confirmation_number);
        break;

      case 'check_availability':
        result = checkAvailability(args);
        break;

      default:
        result = { error: 'Unknown function' };
    }

    // Send function result back to OpenAI
    const response = {
      type: 'conversation.item.create',
      item: {
        type: 'function_call_output',
        call_id: callId,
        output: JSON.stringify(result)
      }
    };

    ws.send(JSON.stringify(response));

    // Trigger a new response
    ws.send(JSON.stringify({ type: 'response.create' }));

  } catch (error) {
    console.error('❌ Function call error:', error);

    const errorResponse = {
      type: 'conversation.item.create',
      item: {
        type: 'function_call_output',
        call_id: callId,
        output: JSON.stringify({ error: error.message })
      }
    };

    ws.send(JSON.stringify(errorResponse));
    ws.send(JSON.stringify({ type: 'response.create' }));
  }
}

function checkAvailability(args) {
  // Validate dates first
  const checkIn = new Date(args.check_in_date);
  const checkOut = new Date(args.check_out_date);

  if (isNaN(checkIn.getTime())) {
    return {
      available: false,
      message: 'Invalid check-in date'
    };
  }

  if (isNaN(checkOut.getTime())) {
    return {
      available: false,
      message: 'Invalid check-out date'
    };
  }

  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    return {
      available: false,
      message: 'Check-out date must be after check-in date'
    };
  }

  // Check room type validity
  const roomTypes = getRoomTypes();
  const requestedRoom = args.room_type ?
    roomTypes.find(r => r.id === args.room_type) :
    null;

  if (args.room_type && !requestedRoom) {
    return {
      available: false,
      message: 'Invalid room type'
    };
  }

  // Check actual availability against existing bookings
  const allBookings = getAllBookings();
  const bookings = allBookings.bookings || [];

  const roomsToCheck = args.room_type ? [requestedRoom] : roomTypes;
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

    // Assume each room type has limited inventory (configurable per room type)
    const inventory = room.inventory || 5; // Default 5 rooms per type
    const availableCount = inventory - overlappingBookings;

    if (availableCount > 0) {
      availableRooms.push({
        ...room,
        available_count: availableCount
      });
    }
  }

  if (availableRooms.length === 0) {
    return {
      available: false,
      message: `No rooms available for the selected dates (${nights} night(s))`
    };
  }

  return {
    available: true,
    rooms: availableRooms,
    nights: nights,
    message: `${availableRooms.length} room type(s) available for ${nights} night(s)`
  };
}
