# FST Booking System - Admin Panel Documentation

## Overview
This is a separate admin application for managing room booking confirmations in the FST Booking System. The admin panel allows administrators to view all bookings and change their status from "Menunggu Konfirmasi" (Pending) to "Disetujui" (Approved) or "Ditolak" (Rejected).

## Features

### 1. **Admin Login System**
- Secure login page for administrators
- Session management using localStorage
- Secure credentials (stored in CREDENTIALS.md - not public)

### 2. **Admin Dashboard**
- View all bookings in a clean table interface
- Real-time statistics showing:
  - Total bookings
  - Pending bookings
  - Approved bookings
  - Rejected bookings

### 3. **Booking Management**
- **Filter bookings** by status (All, Pending, Approved, Rejected)
- **Search functionality** to find bookings by:
  - Booking ID
  - Customer name
  - Email
  - Room type
- **View detailed information** for each booking
- **Update booking status** (Approve/Reject pending bookings)

### 4. **Dynamic Status Updates**
- When an admin changes a booking status, it's immediately reflected
- Users can see their booking status on the confirmation page
- Status changes are preserved across sessions

## File Structure

```
FSTBookingSystem/
├── admin-login.html          # Admin login page
├── admin-panel.html          # Admin dashboard
├── js/
│   └── booking-manager.js    # Booking management logic
├── booking-form.html         # Updated to save bookings properly
└── booking-confirmation.html # Updated to show dynamic status
```

## How to Use

### For Administrators:

1. **Access Admin Panel**
   - Navigate to `admin-login.html`
   - Use the admin credentials (check `CREDENTIALS.md` file for secure login details)

2. **View Bookings**
   - After login, you'll see the admin dashboard
   - All bookings are displayed in a table format
   - Statistics cards show booking counts by status

3. **Filter Bookings**
   - Click filter buttons (All, Pending, Approved, Rejected) to view specific bookings
   - Use the search box to find specific bookings

4. **View Booking Details**
   - Click the "View" button on any booking to see full details
   - A modal will pop up with complete booking information

5. **Approve/Reject Bookings**
   - For pending bookings, you'll see "Approve" and "Reject" buttons
   - Click the appropriate button to change the status
   - Confirm your action in the alert dialog

6. **Logout**
   - Click the "Logout" button in the header when done

### For Users:

1. **Make a Booking**
   - Fill out the booking form at `booking-form.html`
   - Submit the form
   - You'll be redirected to the confirmation page

2. **View Booking Status**
   - The confirmation page shows your booking details
   - The status badge will show:
     - **Yellow**: Menunggu Konfirmasi (Pending)
     - **Green**: Disetujui (Approved)
     - **Red**: Ditolak (Rejected)

## Data Storage

The system uses **localStorage** for data persistence:

- `bookings`: Array of all booking objects
- `adminLoggedIn`: Admin authentication status
- `adminUsername`: Logged-in admin username
- `currentBooking`: Temporary storage for the most recent booking

### Booking Object Structure

```javascript
{
  bookingId: "FST-2024-123",      // Unique identifier
  fullName: "John Doe",           // Customer name
  email: "john@example.com",      // Customer email
  phone: "+62 812-3456-7890",     // Customer phone
  institution: "FST UIN Jakarta", // Institution name
  bookingDate: "2024-12-15",      // Reservation date
  startTime: "09:00",             // Start time
  endTime: "11:00",               // End time
  roomType: "ruang-kelas-biasa",  // Room type
  participants: "11-25",          // Number of participants
  purpose: "seminar",             // Purpose of booking
  description: "...",             // Activity description
  additionalFacilities: [...],    // Array of facilities
  status: "pending",              // pending/approved/rejected
  createdAt: "2024-12-07T...",    // Creation timestamp
  updatedAt: "2024-12-07T..."     // Last update timestamp
}
```

## Status Types

| Status | Display Text | Color | Meaning |
|--------|-------------|-------|---------|
| `pending` | Menunggu Konfirmasi | Yellow | Waiting for admin approval |
| `approved` | Disetujui | Green | Approved by admin |
| `rejected` | Ditolak | Red | Rejected by admin |

## Security Notes

⚠️ **Important**: This implementation uses localStorage and client-side authentication, which is suitable for demonstration purposes but **NOT recommended for production use**.

For production deployment, you should:
- Implement server-side authentication
- Use a proper database (MySQL, PostgreSQL, MongoDB, etc.)
- Add API endpoints for CRUD operations
- Implement proper user roles and permissions
- Use secure password hashing (bcrypt, etc.)
- Add HTTPS encryption
- Implement session timeouts
- Add audit logs for admin actions

## Customization

### Change Admin Credentials

Edit `admin-login.html`, find this code:

```javascript
const adminCredentials = {
    username: 'your_admin_username',
    password: 'your_secure_password'
};
```

Change the username and password as needed.

### Customize Status Options

Edit `js/booking-manager.js` to add more status types or change existing ones.

### Styling

- Admin panel uses custom CSS embedded in `admin-panel.html`
- Login page uses custom CSS embedded in `admin-login.html`
- Modify the `<style>` sections to change colors, fonts, layouts, etc.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: Requires a modern browser with localStorage support.

## Troubleshooting

### No bookings showing in admin panel
- Check that bookings have been submitted through `booking-form.html`
- Check browser console for JavaScript errors
- Verify localStorage has the `bookings` key

### Can't login to admin panel
- Verify you're using correct credentials
- Clear localStorage if needed: `localStorage.clear()`
- Check browser console for errors

### Status not updating
- Refresh the page after status change
- Check that you confirmed the action in the alert dialog
- Verify localStorage is working (check browser settings)

## Future Enhancements

Potential improvements for this system:
- Email notifications when status changes
- User dashboard to view their own bookings
- Calendar view for bookings
- Export bookings to CSV/Excel
- Booking conflict detection
- Multi-admin support with different permission levels
- Booking notes/comments from admin
- Auto-approval based on criteria

## Support

For questions or issues, please contact the development team.

---

**Version**: 1.0  
**Last Updated**: December 7, 2024  
**Developer**: Narendra Yusuf

