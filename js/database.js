// Database operations using Supabase
// This replaces localStorage with real database storage

const BookingDB = {
    // Create a new booking
    async createBooking(bookingData) {
        try {
            // Check if supabaseClient is available
            if (!window.supabaseClient) {
                throw new Error('Supabase client not initialized');
            }
            
            const { data, error } = await window.supabaseClient
                .from('bookings')
                .insert([{
                    booking_id: bookingData.bookingId,
                    full_name: bookingData.fullName,
                    email: bookingData.email,
                    phone: bookingData.phone,
                    institution: bookingData.institution || '',
                    booking_date: bookingData.bookingDate,
                    start_time: bookingData.startTime,
                    end_time: bookingData.endTime,
                    room_type: bookingData.roomType,
                    participants: bookingData.participants || '',
                    purpose: bookingData.purpose,
                    description: bookingData.description || '',
                    additional_facilities: bookingData.additionalFacilities || [],
                    status: bookingData.status || 'pending',
                    created_at: bookingData.createdAt || new Date().toISOString()
                }])
                .select();

            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error creating booking:', error);
            return { success: false, error: error.message };
        }
    },

    // Get all bookings
    async getAllBookings() {
        try {
            if (!window.supabaseClient) {
                throw new Error('Supabase client not initialized');
            }
            
            const { data, error } = await window.supabaseClient
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            
            // Convert database format to app format
            const bookings = data.map(booking => ({
                id: booking.id,
                bookingId: booking.booking_id,
                fullName: booking.full_name,
                email: booking.email,
                phone: booking.phone,
                institution: booking.institution,
                bookingDate: booking.booking_date,
                startTime: booking.start_time,
                endTime: booking.end_time,
                roomType: booking.room_type,
                participants: booking.participants,
                purpose: booking.purpose,
                description: booking.description,
                additionalFacilities: booking.additional_facilities || [],
                status: booking.status,
                createdAt: booking.created_at,
                updatedAt: booking.updated_at
            }));

            return { success: true, data: bookings };
        } catch (error) {
            console.error('Error fetching bookings:', error);
            return { success: false, error: error.message, data: [] };
        }
    },

    // Get booking by ID
    async getBookingById(bookingId) {
        try {
            if (!window.supabaseClient) {
                throw new Error('Supabase client not initialized');
            }
            
            const { data, error } = await window.supabaseClient
                .from('bookings')
                .select('*')
                .eq('booking_id', bookingId)
                .single();

            if (error) throw error;

            // Convert to app format
            const booking = {
                id: data.id,
                bookingId: data.booking_id,
                fullName: data.full_name,
                email: data.email,
                phone: data.phone,
                institution: data.institution,
                bookingDate: data.booking_date,
                startTime: data.start_time,
                endTime: data.end_time,
                roomType: data.room_type,
                participants: data.participants,
                purpose: data.purpose,
                description: data.description,
                additionalFacilities: data.additional_facilities || [],
                status: data.status,
                createdAt: data.created_at,
                updatedAt: data.updated_at
            };

            return { success: true, data: booking };
        } catch (error) {
            console.error('Error fetching booking:', error);
            return { success: false, error: error.message };
        }
    },

    // Update booking status
    async updateBookingStatus(bookingId, newStatus) {
        try {
            if (!window.supabaseClient) {
                throw new Error('Supabase client not initialized');
            }
            
            const { data, error } = await window.supabaseClient
                .from('bookings')
                .update({ 
                    status: newStatus,
                    updated_at: new Date().toISOString()
                })
                .eq('booking_id', bookingId)
                .select();

            if (error) throw error;
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Error updating booking status:', error);
            return { success: false, error: error.message };
        }
    },

    // Get bookings by status
    async getBookingsByStatus(status) {
        try {
            if (!window.supabaseClient) {
                throw new Error('Supabase client not initialized');
            }
            
            const { data, error } = await window.supabaseClient
                .from('bookings')
                .select('*')
                .eq('status', status)
                .order('created_at', { ascending: false });

            if (error) throw error;

            const bookings = data.map(booking => ({
                id: booking.id,
                bookingId: booking.booking_id,
                fullName: booking.full_name,
                email: booking.email,
                phone: booking.phone,
                institution: booking.institution,
                bookingDate: booking.booking_date,
                startTime: booking.start_time,
                endTime: booking.end_time,
                roomType: booking.room_type,
                participants: booking.participants,
                purpose: booking.purpose,
                description: booking.description,
                additionalFacilities: booking.additional_facilities || [],
                status: booking.status,
                createdAt: booking.created_at,
                updatedAt: booking.updated_at
            }));

            return { success: true, data: bookings };
        } catch (error) {
            console.error('Error fetching bookings by status:', error);
            return { success: false, error: error.message, data: [] };
        }
    },

    // Delete a booking (admin only)
    async deleteBooking(bookingId) {
        try {
            if (!window.supabaseClient) {
                throw new Error('Supabase client not initialized');
            }
            
            const { error } = await window.supabaseClient
                .from('bookings')
                .delete()
                .eq('booking_id', bookingId);

            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Error deleting booking:', error);
            return { success: false, error: error.message };
        }
    },

    // Get statistics
    async getStatistics() {
        try {
            if (!window.supabaseClient) {
                throw new Error('Supabase client not initialized');
            }
            
            const { data, error } = await window.supabaseClient
                .from('bookings')
                .select('status');

            if (error) throw error;

            const stats = {
                total: data.length,
                pending: data.filter(b => b.status === 'pending').length,
                approved: data.filter(b => b.status === 'approved').length,
                rejected: data.filter(b => b.status === 'rejected').length
            };

            return { success: true, data: stats };
        } catch (error) {
            console.error('Error fetching statistics:', error);
            return { 
                success: false, 
                error: error.message,
                data: { total: 0, pending: 0, approved: 0, rejected: 0 }
            };
        }
    },

    // Check if Supabase is configured
    isConfigured() {
        return typeof SUPABASE_CONFIG !== 'undefined' &&
               SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_URL_HERE' && 
               SUPABASE_CONFIG.anonKey !== 'YOUR_SUPABASE_ANON_KEY_HERE' &&
               window.supabaseClient !== null;
    },

    // Fallback to localStorage if Supabase not configured
    useFallback() {
        return !this.isConfigured();
    }
};

// Make available globally
window.BookingDB = BookingDB;



