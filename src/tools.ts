/**
 * OpenAI Agents SDK Tools
 * Defines tools with Zod validation for the RealtimeAgent
 */

import { tool } from '@openai/agents-realtime';
import { z } from 'zod';
import { bookingAPI } from './booking-api.js';
import { getRoomTypes, getHotelInfo } from './hotel-config.js';

/**
 * Tool: Create Booking
 * Creates a new hotel reservation after confirming all details with the guest
 */
export const createBookingTool = tool({
  name: 'create_booking',
  description: 'Creates a new hotel reservation after confirming all details with the guest',
  parameters: z.object({
    guest_name: z.string().min(1, 'Guest name is required'),
    guest_email: z.string().email('Valid email address is required'),
    guest_phone: z.string().optional(),
    check_in_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    check_out_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    room_type: z.enum(['standard', 'deluxe', 'suite', 'penthouse'], {
      errorMap: () => ({ message: 'Room type must be: standard, deluxe, suite, or penthouse' })
    }),
    number_of_guests: z.number().int().positive('Number of guests must be a positive integer'),
    special_requests: z.string().optional()
  }),
  execute: async (input) => {
    console.log('🔧 Tool: create_booking', input);

    const result = await bookingAPI.createBooking(input);

    if (result.success && result.data) {
      return {
        success: true,
        confirmation_number: result.data.confirmation_number,
        guest_name: result.data.guest_name,
        room_name: result.data.room_name,
        check_in_date: result.data.check_in_date,
        check_out_date: result.data.check_out_date,
        number_of_nights: result.data.number_of_nights,
        total_price: result.data.total_price,
        message: result.message
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to create booking'
      };
    }
  }
});

/**
 * Tool: Get Booking
 * Retrieves booking details using a confirmation number
 */
export const getBookingTool = tool({
  name: 'get_booking',
  description: 'Retrieves booking details using a confirmation number',
  parameters: z.object({
    confirmation_number: z.string().min(1, 'Confirmation number is required')
  }),
  execute: async (input) => {
    console.log('🔧 Tool: get_booking', input);

    const result = await bookingAPI.getBooking(input.confirmation_number);

    if (result.success && result.data) {
      return {
        success: true,
        booking: {
          confirmation_number: result.data.confirmation_number,
          guest_name: result.data.guest_name,
          guest_email: result.data.guest_email,
          guest_phone: result.data.guest_phone,
          check_in_date: result.data.check_in_date,
          check_out_date: result.data.check_out_date,
          room_type: result.data.room_type,
          room_name: result.data.room_name,
          number_of_guests: result.data.number_of_guests,
          number_of_nights: result.data.number_of_nights,
          price_per_night: result.data.price_per_night,
          total_price: result.data.total_price,
          special_requests: result.data.special_requests,
          status: result.data.status
        }
      };
    } else {
      return {
        success: false,
        error: result.error || 'Booking not found'
      };
    }
  }
});

/**
 * Tool: Cancel Booking
 * Cancels an existing booking
 */
export const cancelBookingTool = tool({
  name: 'cancel_booking',
  description: 'Cancels an existing booking',
  parameters: z.object({
    confirmation_number: z.string().min(1, 'Confirmation number is required')
  }),
  execute: async (input) => {
    console.log('🔧 Tool: cancel_booking', input);

    const result = await bookingAPI.cancelBooking(input.confirmation_number);

    if (result.success) {
      return {
        success: true,
        message: result.message || `Booking ${input.confirmation_number} has been cancelled successfully`
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to cancel booking'
      };
    }
  }
});

/**
 * Tool: Check Availability
 * Checks room availability for specific dates
 */
export const checkAvailabilityTool = tool({
  name: 'check_availability',
  description: 'Checks room availability for specific dates and provides pricing information',
  parameters: z.object({
    check_in_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    check_out_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    room_type: z.enum(['standard', 'deluxe', 'suite', 'penthouse']).optional()
  }),
  execute: async (input) => {
    console.log('🔧 Tool: check_availability', input);

    const result = await bookingAPI.checkAvailability(input);

    if (result.success) {
      return {
        success: true,
        available: result.available,
        rooms: result.rooms,
        nights: result.nights,
        message: result.message
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to check availability'
      };
    }
  }
});

/**
 * Tool: Get Hotel Information
 * Provides detailed information about the hotel and its amenities
 */
export const getHotelInfoTool = tool({
  name: 'get_hotel_info',
  description: 'Provides detailed information about the hotel including amenities, location, and contact details',
  parameters: z.object({}),
  execute: async () => {
    console.log('🔧 Tool: get_hotel_info');

    const hotelInfo = getHotelInfo();
    const roomTypes = getRoomTypes();

    return {
      success: true,
      hotel: {
        name: hotelInfo.name,
        location: hotelInfo.location,
        address: hotelInfo.address,
        phone: hotelInfo.phone,
        email: hotelInfo.email,
        check_in_time: hotelInfo.checkInTime,
        check_out_time: hotelInfo.checkOutTime,
        amenities: hotelInfo.amenities,
        description: hotelInfo.description
      },
      room_types: roomTypes.map(room => ({
        id: room.id,
        name: room.name,
        description: room.description,
        price: room.price,
        capacity: room.capacity,
        features: room.features
      }))
    };
  }
});

/**
 * Export all tools as an array for easy agent configuration
 */
export const hotelTools = [
  createBookingTool,
  getBookingTool,
  cancelBookingTool,
  checkAvailabilityTool,
  getHotelInfoTool
];
