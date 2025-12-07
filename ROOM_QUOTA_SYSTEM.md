# Room Quota System Documentation

## Overview

The FST Booking System now includes an intelligent **Room Availability & Quota Management System** that prevents overbooking and ensures fair access to facilities.

---

## 🏢 Room Quotas

Each room type has a limited number of available rooms:

| Room Type | Quota | Description |
|-----------|-------|-------------|
| **Ruang Kelas Biasa** | 20 | Standard classrooms |
| **Ruang Kelas Besar** | 10 | Large classrooms |
| **Lab Komputer** | 5 | Computer laboratories |
| **Lab Mikrobiologi** | 5 | Microbiology laboratories |
| **Ruang Teater Besar** | 5 | Large theater rooms |
| **Ruang Teater Double Proyektor** | 2 | Theater rooms with dual projectors |
| **Ruang Meeting** | 3 | Meeting rooms |

**Total**: 50 rooms across all types

---

## 🎯 How It Works

### 1. Real-Time Availability Checking

When a user selects:
- Room type
- Date
- Start time
- End time

The system automatically:
✅ Counts existing bookings for that room type  
✅ Checks for time slot overlaps  
✅ Calculates remaining availability  
✅ Displays real-time status

### 2. Time Overlap Detection

The system detects if bookings overlap using this logic:

```
Booking A: 09:00 - 11:00
Booking B: 10:00 - 12:00
Result: OVERLAP ❌ (both can't use the same room)

Booking A: 09:00 - 11:00
Booking B: 11:00 - 13:00
Result: NO OVERLAP ✅ (can use the same room)
```

**Rules:**
- Bookings overlap if: `start1 < end2 AND start2 < end1`
- Adjacent bookings (one ends when another starts) do NOT overlap
- Only `pending` and `approved` bookings count toward the quota

### 3. Quota Management

For each time slot, the system:

1. **Gets quota** for the room type
2. **Counts overlapping bookings** already made
3. **Calculates remaining** slots: `remaining = quota - booked`
4. **Allows booking** if `remaining > 0`
5. **Blocks booking** if `remaining = 0`

---

## 📊 User Experience

### Availability Display

When selecting a room and time, users see:

#### ✅ Room Available
```
✓ Ruangan Tersedia
15 dari 20 ruangan tersedia
5 dari 20 ruangan sudah dipesan untuk waktu ini
```

#### ❌ Room Full
```
✗ Ruangan Penuh
Semua ruangan sudah terisi (20/20 terisi)
Semua 20 ruangan sudah terisi untuk waktu yang dipilih.
Silakan pilih waktu atau ruangan lain.
```

### Visual Indicators

- **Green Background** = Available
- **Red Background** = Full
- **Spinner** = Checking availability

---

## 🔄 Booking Flow

### Step 1: User Fills Form
User enters:
- Personal info
- Date & time
- Room type

### Step 2: Real-Time Check
System shows:
- ✅ Available → Green indicator
- ❌ Full → Red indicator with suggestion

### Step 3: Submission Validation
Before saving:
1. System re-checks availability
2. If available → Booking saved
3. If full → Shows error message

### Step 4: Booking Saved
- Status: `pending`
- Counts toward quota immediately
- Admin can approve/reject later

---

## 🎨 Visual Examples

### Scenario 1: Low Demand
```
Room: Ruang Kelas Biasa (20 quota)
Time: Monday 09:00-11:00
Booked: 3 rooms
Status: ✅ 17 rooms available
```

### Scenario 2: High Demand
```
Room: Ruang Teater Double Proyektor (2 quota)
Time: Friday 14:00-16:00
Booked: 2 rooms
Status: ❌ Fully booked
```

### Scenario 3: Partial Overlap
```
Time Slot: 10:00-12:00

Existing Bookings:
- Room A: 09:00-10:30 (overlaps)
- Room B: 10:30-12:00 (overlaps)
- Room C: 12:00-14:00 (no overlap)

Result: 2 of 20 rooms unavailable
Status: ✅ 18 rooms available
```

---

## 💻 Technical Implementation

### Files Created

1. **`js/room-availability.js`** - Core availability logic
   - Quota configuration
   - Availability checker
   - Time overlap detector

2. **Updates to `booking-form.html`**
   - Availability display UI
   - Real-time checking
   - Submission validation

### Key Functions

```javascript
// Check if a room is available
RoomAvailability.checkAvailability(roomType, date, startTime, endTime)

// Returns:
{
  available: true/false,
  quota: 20,
  booked: 5,
  remaining: 15,
  message: "15 dari 20 ruangan tersedia"
}
```

### Database Integration

Works with:
- ✅ **Supabase** (live database)
- ✅ **localStorage** (fallback)

Queries only `pending` and `approved` bookings (rejected bookings don't count).

---

## ⚙️ Configuration

### Changing Quotas

Edit `js/room-availability.js`:

```javascript
const ROOM_QUOTAS = {
    'ruang-kelas-biasa': 20,     // Change this number
    'ruang-kelas-besar': 10,
    // ... etc
};
```

### Adding New Room Types

1. Add to `ROOM_QUOTAS` in `room-availability.js`
2. Add to room form dropdown in `booking-form.html`
3. Add to room data object with details

---

## 🚀 Features

### For Users
✅ **See availability in real-time**  
✅ **Know before booking** if room is available  
✅ **Get alternative suggestions** if full  
✅ **Transparent quota information**

### For Administrators
✅ **Prevent overbooking** automatically  
✅ **Fair resource allocation**  
✅ **Data-driven decisions** on quota adjustments  
✅ **Conflict-free scheduling**

---

## 📈 Analytics & Insights

Administrators can track:
- **Popular time slots** (frequently full)
- **Underutilized rooms** (rarely booked)
- **Peak demand periods**
- **Quota utilization rates**

This data helps optimize:
- Room allocations
- Quota adjustments
- Resource planning

---

## 🔮 Future Enhancements

Potential improvements:

1. **Priority Booking**
   - VIP users get higher priority
   - Faculty vs Student quotas

2. **Dynamic Quotas**
   - Adjust quotas based on demand
   - Seasonal variations

3. **Waiting List**
   - Queue system for full slots
   - Auto-notify when available

4. **Recurring Bookings**
   - Book same time weekly/monthly
   - Smart conflict detection

5. **Calendar View**
   - Visual availability calendar
   - Drag-and-drop booking

6. **Email Notifications**
   - Alert when room becomes available
   - Reminder before booking time

---

## 🐛 Troubleshooting

### Problem: "Room shows available but can't book"
**Cause**: Another user booked it between your check and submission  
**Solution**: System re-validates on submit; try different time slot

### Problem: "Availability not showing"
**Cause**: Missing room/date/time selection  
**Solution**: Select all three fields to see availability

### Problem: "Wrong quota count"
**Cause**: Rejected bookings counting  
**Solution**: System only counts pending/approved bookings

---

## 📚 Examples

### Example 1: Successful Booking
```
User: Wants Ruang Kelas Biasa
Date: Dec 15, 2024
Time: 09:00 - 11:00

System checks:
- Quota: 20 rooms
- Currently booked: 8 rooms
- Available: 12 rooms

Result: ✅ Booking allowed
Message: "12 dari 20 ruangan tersedia"
```

### Example 2: Failed Booking
```
User: Wants Ruang Meeting
Date: Dec 15, 2024
Time: 14:00 - 16:00

System checks:
- Quota: 3 rooms
- Currently booked: 3 rooms
- Available: 0 rooms

Result: ❌ Booking blocked
Message: "Semua ruangan sudah terisi (3/3)"
Suggestion: "Pilih waktu atau ruangan lain"
```

---

## 🔐 Security & Validation

- ✅ Server-side validation (via Supabase)
- ✅ Race condition handling
- ✅ Duplicate booking prevention
- ✅ Real-time data synchronization

---

## 📞 Support

For quota adjustments or system questions:
1. Check this documentation
2. Review `js/room-availability.js`
3. Contact system administrator

---

**Version**: 1.0  
**Last Updated**: December 7, 2024  
**Status**: Production Ready ✅
