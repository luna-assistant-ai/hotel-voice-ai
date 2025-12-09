/**
 * Booking API Client
 * Communicates with the backend API for booking operations
 */

export interface BookingData {
  guest_name: string;
  guest_email: string;
  guest_phone?: string;
  check_in_date: string;
  check_out_date: string;
  room_type: 'standard' | 'deluxe' | 'suite' | 'penthouse';
  number_of_guests: number;
  special_requests?: string;
}

export interface Booking {
  confirmation_number: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  check_in_date: string;
  check_out_date: string;
  room_type: string;
  room_name: string;
  number_of_guests: number;
  number_of_nights: number;
  price_per_night: number;
  total_price: number;
  special_requests: string;
  status: string;
  created_at: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class BookingAPI {
  private baseUrl = '/api';

  async createBooking(bookingData: BookingData): Promise<ApiResponse<Booking>> {
    try {
      const response = await fetch(`${this.baseUrl}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: error.error || 'Failed to create booking' };
      }

      const result = await response.json();
      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async getBooking(confirmationNumber: string): Promise<ApiResponse<Booking>> {
    try {
      const response = await fetch(`${this.baseUrl}/bookings/${confirmationNumber}`);

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: error.error || 'Booking not found' };
      }

      const result = await response.json();
      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async cancelBooking(confirmationNumber: string): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/bookings/${confirmationNumber}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: error.error || 'Failed to cancel booking' };
      }

      const result = await response.json();
      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async checkAvailability(params: {
    check_in_date: string;
    check_out_date: string;
    room_type?: 'standard' | 'deluxe' | 'suite' | 'penthouse';
  }): Promise<ApiResponse> {
    try {
      const queryParams = new URLSearchParams({
        check_in_date: params.check_in_date,
        check_out_date: params.check_out_date,
        ...(params.room_type && { room_type: params.room_type })
      });

      const response = await fetch(`${this.baseUrl}/availability?${queryParams}`);

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: error.error || 'Failed to check availability' };
      }

      const result = await response.json();
      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

export const bookingAPI = new BookingAPI();
