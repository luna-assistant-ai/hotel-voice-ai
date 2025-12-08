import { readFileSync, writeFileSync, existsSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { getRoomTypeById } from './hotel-config.js';

const DB_FILE = './database.json';

// Initialize database
function initDatabase() {
  if (!existsSync(DB_FILE)) {
    writeFileSync(DB_FILE, JSON.stringify({ bookings: [] }, null, 2));
  }
}

// Read database
function readDatabase() {
  initDatabase();
  const data = readFileSync(DB_FILE, 'utf8');
  return JSON.parse(data);
}

// Write database
function writeDatabase(data) {
  writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// Create a new booking
export async function createBooking(bookingData) {
  try {
    const db = readDatabase();

    // Validate dates
    const checkIn = new Date(bookingData.check_in_date);
    const checkOut = new Date(bookingData.check_out_date);

    if (checkOut <= checkIn) {
      return {
        success: false,
        error: 'Check-out date must be after check-in date'
      };
    }

    // Calculate number of nights
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

    // Get room information
    const roomType = getRoomTypeById(bookingData.room_type);

    if (!roomType) {
      return {
        success: false,
        error: 'Invalid room type'
      };
    }

    // Validate guest count
    if (bookingData.number_of_guests > roomType.capacity) {
      return {
        success: false,
        error: `This room type can accommodate maximum ${roomType.capacity} guests`
      };
    }

    // Calculate total price
    const totalPrice = roomType.price * nights;

    // Generate confirmation number
    const confirmationNumber = generateConfirmationNumber();

    // Create booking object
    const booking = {
      confirmation_number: confirmationNumber,
      guest_name: bookingData.guest_name,
      guest_email: bookingData.guest_email,
      guest_phone: bookingData.guest_phone || '',
      check_in_date: bookingData.check_in_date,
      check_out_date: bookingData.check_out_date,
      room_type: bookingData.room_type,
      room_name: roomType.name,
      number_of_guests: bookingData.number_of_guests,
      number_of_nights: nights,
      price_per_night: roomType.price,
      total_price: totalPrice,
      special_requests: bookingData.special_requests || '',
      status: 'confirmed',
      created_at: new Date().toISOString()
    };

    // Add booking to database
    db.bookings.push(booking);
    writeDatabase(db);

    console.log('✅ Booking created:', confirmationNumber);

    return {
      success: true,
      booking: booking,
      message: `Booking confirmed! Your confirmation number is ${confirmationNumber}. Total price: $${totalPrice} NZD for ${nights} night(s).`
    };

  } catch (error) {
    console.error('❌ Error creating booking:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Get booking by confirmation number
export async function getBooking(confirmationNumber) {
  try {
    const db = readDatabase();
    const booking = db.bookings.find(b => b.confirmation_number === confirmationNumber);

    if (!booking) {
      return {
        success: false,
        error: 'Booking not found'
      };
    }

    return {
      success: true,
      booking: booking
    };

  } catch (error) {
    console.error('❌ Error retrieving booking:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Get all bookings
export async function getAllBookings() {
  try {
    const db = readDatabase();
    return {
      success: true,
      bookings: db.bookings
    };
  } catch (error) {
    console.error('❌ Error retrieving bookings:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Update booking
export async function updateBooking(confirmationNumber, updates) {
  try {
    const db = readDatabase();
    const bookingIndex = db.bookings.findIndex(b => b.confirmation_number === confirmationNumber);

    if (bookingIndex === -1) {
      return {
        success: false,
        error: 'Booking not found'
      };
    }

    // Update booking
    db.bookings[bookingIndex] = {
      ...db.bookings[bookingIndex],
      ...updates,
      updated_at: new Date().toISOString()
    };

    writeDatabase(db);

    return {
      success: true,
      booking: db.bookings[bookingIndex],
      message: 'Booking updated successfully'
    };

  } catch (error) {
    console.error('❌ Error updating booking:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Cancel booking
export async function cancelBooking(confirmationNumber) {
  try {
    const db = readDatabase();
    const bookingIndex = db.bookings.findIndex(b => b.confirmation_number === confirmationNumber);

    if (bookingIndex === -1) {
      return {
        success: false,
        error: 'Booking not found'
      };
    }

    // Mark as cancelled instead of deleting
    db.bookings[bookingIndex].status = 'cancelled';
    db.bookings[bookingIndex].cancelled_at = new Date().toISOString();

    writeDatabase(db);

    return {
      success: true,
      message: `Booking ${confirmationNumber} has been cancelled successfully`
    };

  } catch (error) {
    console.error('❌ Error cancelling booking:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Generate confirmation number
function generateConfirmationNumber() {
  const prefix = 'AKL';
  const random = uuidv4().split('-')[0].toUpperCase();
  return `${prefix}-${random}`;
}
