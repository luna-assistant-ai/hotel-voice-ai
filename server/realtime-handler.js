import WebSocket from 'ws';
import { getHotelInfo, getRoomTypes } from './hotel-config.js';
import {
  createBooking,
  getBooking,
  getAllBookings,
  updateBooking,
  cancelBooking
} from './booking-manager.js';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_REALTIME_URL = 'wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17';

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

      // Handle function calls
      openAiWs.on('message', async (message) => {
        const event = JSON.parse(message.toString());

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

  return `You are a friendly and professional voice assistant for ${hotelInfo.name}, located in ${hotelInfo.location}.

Your role is to help guests make hotel reservations and answer questions about the hotel.

HOTEL INFORMATION:
- Name: ${hotelInfo.name}
- Location: ${hotelInfo.location}
- Phone: ${hotelInfo.phone}
- Email: ${hotelInfo.email}
- Check-in time: ${hotelInfo.checkInTime}
- Check-out time: ${hotelInfo.checkOutTime}

AVAILABLE ROOM TYPES:
${roomTypes.map(room => `- ${room.name}: ${room.description}, Price: $${room.price} NZD per night, Capacity: ${room.capacity} guests`).join('\n')}

AMENITIES:
${hotelInfo.amenities.join(', ')}

CONVERSATION GUIDELINES:
1. Greet guests warmly and introduce yourself
2. Ask for necessary information: guest name, check-in date, check-out date, number of guests, room preference
3. Suggest appropriate room types based on guest needs
4. Calculate total price (number of nights × room price)
5. Confirm all details before creating a booking
6. Provide a booking confirmation number after successful booking
7. Be helpful with questions about the hotel, location, and amenities
8. Speak naturally and conversationally

IMPORTANT:
- Always confirm dates in DD/MM/YYYY format
- Ensure check-out date is after check-in date
- Verify guest count doesn't exceed room capacity
- Be polite and professional at all times
- If you don't understand something, politely ask the guest to repeat or clarify`;
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
        result = await createBooking(args);
        break;

      case 'get_booking':
        result = await getBooking(args.confirmation_number);
        break;

      case 'cancel_booking':
        result = await cancelBooking(args.confirmation_number);
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
  // For demo purposes, we'll assume rooms are always available
  // In a real system, this would check against actual bookings
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

  const checkIn = new Date(args.check_in_date);
  const checkOut = new Date(args.check_out_date);
  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

  if (nights <= 0) {
    return {
      available: false,
      message: 'Check-out date must be after check-in date'
    };
  }

  return {
    available: true,
    rooms: args.room_type ? [requestedRoom] : roomTypes,
    nights: nights,
    message: `Rooms available for ${nights} night(s)`
  };
}
