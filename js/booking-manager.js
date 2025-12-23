// Booking Manager JavaScript
// This handles all booking operations for the admin panel

// Check if admin is logged in
if (localStorage.getItem('adminLoggedIn') !== 'true') {
    window.location.href = 'admin-login.html';
}

// Set admin username
document.getElementById('adminName').textContent = localStorage.getItem('adminUsername') || 'Admin';

// Admin logout function
function adminLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminUsername');
        window.location.href = 'admin-login.html';
    }
}

// Get all bookings from Supabase or localStorage
async function getAllBookings() {
    // Try Supabase first
    if (window.BookingDB && !window.BookingDB.useFallback()) {
        const result = await window.BookingDB.getAllBookings();
        return result.success ? result.data : [];
    }
    
    // Fallback to localStorage
    const bookings = localStorage.getItem('bookings');
    return bookings ? JSON.parse(bookings) : [];
}

// Save bookings (deprecated - use updateBookingStatus instead)
function saveBookings(bookings) {
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Update statistics
async function updateStatistics() {
    // Try Supabase first
    if (window.BookingDB && !window.BookingDB.useFallback()) {
        const result = await window.BookingDB.getStatistics();
        if (result.success) {
            const stats = result.data;
            document.getElementById('totalBookings').textContent = stats.total;
            document.getElementById('pendingBookings').textContent = stats.pending;
            document.getElementById('approvedBookings').textContent = stats.approved;
            document.getElementById('rejectedBookings').textContent = stats.rejected;
            return;
        }
    }
    
    // Fallback to localStorage
    const bookings = await getAllBookings();
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === 'pending').length;
    const approved = bookings.filter(b => b.status === 'approved').length;
    const rejected = bookings.filter(b => b.status === 'rejected').length;
    
    document.getElementById('totalBookings').textContent = total;
    document.getElementById('pendingBookings').textContent = pending;
    document.getElementById('approvedBookings').textContent = approved;
    document.getElementById('rejectedBookings').textContent = rejected;
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('id-ID', options);
}

// Get status badge HTML
function getStatusBadge(status) {
    const statusMap = {
        'pending': { class: 'status-pending', text: 'Menunggu Konfirmasi' },
        'approved': { class: 'status-approved', text: 'Disetujui' },
        'rejected': { class: 'status-rejected', text: 'Ditolak' }
    };
    const statusInfo = statusMap[status] || statusMap['pending'];
    return `<span class="status-badge ${statusInfo.class}">${statusInfo.text}</span>`;
}

// Room type mapping
const roomTypeMapping = {
    'ruang-kelas-biasa': 'Ruang Kelas Biasa',
    'ruang-kelas-besar': 'Ruang Kelas Besar',
    'lab-mikrobiologi': 'Lab Mikrobiologi',
    'lab-komputer': 'Lab Komputer',
    'ruang-teater-besar': 'Ruang Teater Besar',
    'ruang-teater-double-proyektor': 'Ruang Teater Double Proyektor',
    'ruang-meeting': 'Ruang Meeting'
};

// Purpose mapping
const purposeMapping = {
    'kuliah': 'Kuliah',
    'seminar': 'Seminar',
    'rapat': 'Rapat',
    'presentasi': 'Presentasi',
    'workshop': 'Workshop',
    'lainnya': 'Lainnya'
};

// Display bookings in table
async function displayBookings(filter = 'all', searchTerm = '') {
    const bookings = await getAllBookings();
    const tbody = document.getElementById('bookingsTableBody');
    
    // Filter bookings
    let filteredBookings = bookings;
    if (filter !== 'all') {
        filteredBookings = bookings.filter(b => b.status === filter);
    }
    
    // Search filter
    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        filteredBookings = filteredBookings.filter(b => 
            b.bookingId.toLowerCase().includes(searchTerm) ||
            b.fullName.toLowerCase().includes(searchTerm) ||
            b.email.toLowerCase().includes(searchTerm) ||
            roomTypeMapping[b.roomType]?.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort by date (newest first)
    filteredBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Display bookings
    if (filteredBookings.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6">
                    <div class="empty-state">
                        <i class="fa fa-inbox"></i>
                        <p>No bookings found</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = filteredBookings.map(booking => `
        <tr>
            <td><span class="booking-id">${booking.bookingId}</span></td>
            <td>
                <strong>${booking.fullName}</strong><br>
                <small>${booking.email}</small>
            </td>
            <td>
                ${formatDate(booking.bookingDate)}<br>
                <small>${booking.startTime} - ${booking.endTime}</small>
            </td>
            <td>${roomTypeMapping[booking.roomType] || booking.roomType}</td>
            <td>${getStatusBadge(booking.status)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-view" onclick="viewBooking('${booking.bookingId}')">
                        <i class="fa fa-eye"></i> View
                    </button>
                    ${booking.status === 'pending' ? `
                        <button class="btn-action btn-approve" onclick="updateBookingStatus('${booking.bookingId}', 'approved')">
                            <i class="fa fa-check"></i> Approve
                        </button>
                        <button class="btn-action btn-reject" onclick="updateBookingStatus('${booking.bookingId}', 'rejected')">
                            <i class="fa fa-times"></i> Reject
                        </button>
                    ` : ''}
                </div>
            </td>
        </tr>
    `).join('');
}

// Filter bookings
let currentFilter = 'all';
async function filterBookings(filter) {
    currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    await displayBookings(filter, document.getElementById('searchInput').value);
}

// Search bookings
async function searchBookings() {
    const searchTerm = document.getElementById('searchInput').value;
    await displayBookings(currentFilter, searchTerm);
}

// Update booking status
async function updateBookingStatus(bookingId, newStatus) {
    const confirmMessage = newStatus === 'approved' 
        ? 'Are you sure you want to approve this booking?' 
        : 'Are you sure you want to reject this booking?';
    
    if (!confirm(confirmMessage)) return;
    
    // Try Supabase first
    if (window.BookingDB && !window.BookingDB.useFallback()) {
        const result = await window.BookingDB.updateBookingStatus(bookingId, newStatus);
        
        if (result.success) {
            // Update display
            await displayBookings(currentFilter, document.getElementById('searchInput').value);
            await updateStatistics();
            
            // Show success message
            alert(`Booking ${newStatus === 'approved' ? 'approved' : 'rejected'} successfully!`);
        } else {
            alert('Error updating booking: ' + result.error);
        }
    } else {
        // Fallback to localStorage
        const bookings = await getAllBookings();
        const booking = bookings.find(b => b.bookingId === bookingId);
        
        if (booking) {
            booking.status = newStatus;
            booking.updatedAt = new Date().toISOString();
            saveBookings(bookings);
            
            // Update display
            await displayBookings(currentFilter, document.getElementById('searchInput').value);
            await updateStatistics();
            
            // Show success message
            alert(`Booking ${newStatus === 'approved' ? 'approved' : 'rejected'} successfully!`);
        }
    }
}

// View booking details
async function viewBooking(bookingId) {
    const bookings = await getAllBookings();
    const booking = bookings.find(b => b.bookingId === bookingId);
    
    if (!booking) return;
    
    // Facility mapping
    const facilityMapping = {
        'projector': 'Proyektor',
        'soundSystem': 'Sound System',
        'whiteboard': 'Whiteboard',
        'ac': 'AC',
        'internet': 'Internet/WiFi',
        'catering': 'Catering'
    };
    
    const facilities = booking.additionalFacilities || [];
    const facilityNames = facilities.map(f => facilityMapping[f] || f).join(', ') || 'Tidak ada';
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="detail-row">
            <div class="detail-label">Booking ID:</div>
            <div class="detail-value"><strong>${booking.bookingId}</strong></div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Nama Lengkap:</div>
            <div class="detail-value">${booking.fullName}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Email:</div>
            <div class="detail-value">${booking.email}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Nomor Telepon:</div>
            <div class="detail-value">${booking.phone}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Institusi:</div>
            <div class="detail-value">${booking.institution}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Tanggal Reservasi:</div>
            <div class="detail-value">${formatDate(booking.bookingDate)}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Waktu Penggunaan:</div>
            <div class="detail-value">${booking.startTime} - ${booking.endTime}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Jenis Ruangan:</div>
            <div class="detail-value">${roomTypeMapping[booking.roomType] || booking.roomType}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Jumlah Peserta:</div>
            <div class="detail-value">${booking.participants}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Tujuan Penggunaan:</div>
            <div class="detail-value">${purposeMapping[booking.purpose] || booking.purpose}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Deskripsi Kegiatan:</div>
            <div class="detail-value">${booking.description || 'Tidak ada deskripsi'}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Fasilitas Tambahan:</div>
            <div class="detail-value">${facilityNames}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Status:</div>
            <div class="detail-value">${getStatusBadge(booking.status)}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Tanggal Dibuat:</div>
            <div class="detail-value">${new Date(booking.createdAt).toLocaleString('id-ID')}</div>
        </div>
        ${booking.updatedAt ? `
        <div class="detail-row">
            <div class="detail-label">Terakhir Diupdate:</div>
            <div class="detail-value">${new Date(booking.updatedAt).toLocaleString('id-ID')}</div>
        </div>
        ` : ''}
    `;
    
    document.getElementById('bookingModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async function() {
    await updateStatistics();
    await displayBookings();
});



