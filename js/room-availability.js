// Room Availability Checker
// Manages room quotas and checks availability

// Room quotas configuration
const ROOM_QUOTAS = {
    'ruang-kelas-biasa': 20,
    'ruang-kelas-besar': 10,
    'lab-komputer': 5,
    'lab-mikrobiologi': 5,
    'ruang-teater-besar': 5,
    'ruang-teater-double-proyektor': 2,
    'ruang-meeting': 3
};

// Room display names
const ROOM_NAMES = {
    'ruang-kelas-biasa': 'Ruang Kelas Biasa',
    'ruang-kelas-besar': 'Ruang Kelas Besar',
    'lab-komputer': 'Lab Komputer',
    'lab-mikrobiologi': 'Lab Mikrobiologi',
    'ruang-teater-besar': 'Ruang Teater Besar',
    'ruang-teater-double-proyektor': 'Ruang Teater Double Proyektor',
    'ruang-meeting': 'Ruang Meeting'
};

const RoomAvailability = {
    /**
     * Check if time ranges overlap
     */
    timeRangesOverlap(start1, end1, start2, end2) {
        // Convert time strings to minutes for comparison
        const startMinutes1 = this.timeToMinutes(start1);
        const endMinutes1 = this.timeToMinutes(end1);
        const startMinutes2 = this.timeToMinutes(start2);
        const endMinutes2 = this.timeToMinutes(end2);
        
        // Check if ranges overlap
        return startMinutes1 < endMinutes2 && startMinutes2 < endMinutes1;
    },
    
    /**
     * Convert time string (HH:MM) to minutes
     */
    timeToMinutes(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    },
    
    /**
     * Check room availability for a specific date and time
     */
    async checkAvailability(roomType, bookingDate, startTime, endTime, excludeBookingId = null) {
        try {
            // Get quota for this room type
            const quota = ROOM_QUOTAS[roomType] || 0;
            
            if (quota === 0) {
                return {
                    available: false,
                    quota: 0,
                    booked: 0,
                    remaining: 0,
                    message: 'Invalid room type'
                };
            }
            
            // Get all approved/pending bookings for this room type and date
            let bookings = [];
            
            if (window.BookingDB && !window.BookingDB.useFallback()) {
                // Use Supabase
                const result = await window.BookingDB.getAllBookings();
                if (result.success) {
                    bookings = result.data.filter(b => 
                        b.roomType === roomType &&
                        b.bookingDate === bookingDate &&
                        (b.status === 'pending' || b.status === 'approved') &&
                        (!excludeBookingId || b.bookingId !== excludeBookingId)
                    );
                }
            } else {
                // Use localStorage fallback
                const allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
                bookings = allBookings.filter(b => 
                    b.roomType === roomType &&
                    b.bookingDate === bookingDate &&
                    (b.status === 'pending' || b.status === 'approved') &&
                    (!excludeBookingId || b.bookingId !== excludeBookingId)
                );
            }
            
            // Count overlapping bookings
            const overlappingBookings = bookings.filter(booking => 
                this.timeRangesOverlap(
                    startTime, endTime,
                    booking.startTime, booking.endTime
                )
            );
            
            const bookedCount = overlappingBookings.length;
            const remaining = quota - bookedCount;
            const available = remaining > 0;
            
            return {
                available,
                quota,
                booked: bookedCount,
                remaining,
                roomType,
                roomName: ROOM_NAMES[roomType],
                date: bookingDate,
                timeSlot: `${startTime} - ${endTime}`,
                message: available 
                    ? `${remaining} dari ${quota} ruangan tersedia`
                    : `Semua ruangan sudah terisi (${quota}/${quota} terisi)`,
                overlappingBookings: overlappingBookings.map(b => ({
                    id: b.bookingId,
                    time: `${b.startTime}-${b.endTime}`,
                    bookedBy: b.fullName
                }))
            };
            
        } catch (error) {
            console.error('Error checking availability:', error);
            return {
                available: false,
                quota: 0,
                booked: 0,
                remaining: 0,
                message: 'Error checking availability: ' + error.message
            };
        }
    },
    
    /**
     * Get all quotas
     */
    getAllQuotas() {
        return ROOM_QUOTAS;
    },
    
    /**
     * Get quota for specific room type
     */
    getQuota(roomType) {
        return ROOM_QUOTAS[roomType] || 0;
    },
    
    /**
     * Get room name
     */
    getRoomName(roomType) {
        return ROOM_NAMES[roomType] || roomType;
    },
    
    /**
     * Check availability for multiple time slots (for display)
     */
    async getAvailabilitySummary(roomType, bookingDate) {
        try {
            const quota = ROOM_QUOTAS[roomType] || 0;
            
            // Get all bookings for this room and date
            let bookings = [];
            
            if (window.BookingDB && !window.BookingDB.useFallback()) {
                const result = await window.BookingDB.getAllBookings();
                if (result.success) {
                    bookings = result.data.filter(b => 
                        b.roomType === roomType &&
                        b.bookingDate === bookingDate &&
                        (b.status === 'pending' || b.status === 'approved')
                    );
                }
            } else {
                const allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
                bookings = allBookings.filter(b => 
                    b.roomType === roomType &&
                    b.bookingDate === bookingDate &&
                    (b.status === 'pending' || b.status === 'approved')
                );
            }
            
            return {
                roomType,
                roomName: ROOM_NAMES[roomType],
                quota,
                totalBookings: bookings.length,
                bookings: bookings.map(b => ({
                    id: b.bookingId,
                    timeSlot: `${b.startTime} - ${b.endTime}`,
                    bookedBy: b.fullName,
                    status: b.status
                }))
            };
            
        } catch (error) {
            console.error('Error getting availability summary:', error);
            return null;
        }
    }
};

// Make available globally
window.RoomAvailability = RoomAvailability;



