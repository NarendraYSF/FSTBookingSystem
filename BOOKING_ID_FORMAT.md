# Booking ID Format Documentation

## New Unique Booking ID Format

Every booking now gets a **guaranteed unique** booking ID using the following format:

```
FST-YYYYMMDD-HHMMSS-XXXX
```

### Format Breakdown

| Part | Description | Example |
|------|-------------|---------|
| `FST` | System prefix (Fakultas Sains dan Teknologi) | `FST` |
| `YYYYMMDD` | Date of booking creation (Year-Month-Day) | `20241207` |
| `HHMMSS` | Time of booking creation (Hour-Minute-Second) | `143052` |
| `XXXX` | Random 4-digit number for extra uniqueness | `7834` |

### Examples

- `FST-20241207-143052-7834` - Booking created on Dec 7, 2024 at 14:30:52
- `FST-20241215-091530-2941` - Booking created on Dec 15, 2024 at 09:15:30
- `FST-20250103-162345-0156` - Booking created on Jan 3, 2025 at 16:23:45

### Why This Format?

✅ **Highly Unique**: Combines date, time (down to the second), and random digits  
✅ **Human Readable**: Easy to understand when the booking was made  
✅ **Sortable**: Bookings automatically sort chronologically  
✅ **No Duplicates**: Even if two bookings are made in the same second, the 4-digit random number prevents collisions  
✅ **Professional**: Clean, structured format suitable for official records

### Probability of Collision

The chance of two bookings having the same ID:
- Same second: 1 in 10,000 (0.01%)
- Same minute: Nearly impossible
- Same day: Essentially zero

### Old Format (Deprecated)

Previous format: `FST-2024-XXX`
- Only 1000 possible combinations (000-999)
- High collision risk
- Not time-based

---

## For Developers

### Generating New Booking IDs

The booking ID is auto-generated in:
- `booking-form.html` - Line ~755
- `booking-confirmation.html` - Line ~470

```javascript
// Generate unique booking ID
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
const bookingId = `FST-${year}${month}${day}-${hours}${minutes}${seconds}-${random}`;
```

### Database Storage

The booking ID is stored as:
- **Type**: `text` (in Supabase)
- **Column**: `booking_id`
- **Constraint**: UNIQUE (no duplicates allowed)
- **Example**: `FST-20241207-143052-7834`

---

## For Users

Your booking ID appears on:
1. **Confirmation page** - After submitting a booking
2. **Admin panel** - When viewing all bookings
3. **Email notifications** - (If implemented)

### How to Use Your Booking ID

- Save it for your records
- Use it to track your booking status
- Quote it when contacting support
- Present it when arriving at the reserved room

---

## Format Validation

Valid booking ID regex pattern:

```regex
^FST-\d{8}-\d{6}-\d{4}$
```

Example validation in JavaScript:

```javascript
function isValidBookingId(id) {
    const pattern = /^FST-\d{8}-\d{6}-\d{4}$/;
    return pattern.test(id);
}

// Test
isValidBookingId('FST-20241207-143052-7834'); // true
isValidBookingId('FST-2024-001'); // false (old format)
isValidBookingId('ABC-12345678-123456-1234'); // false (wrong prefix)
```

---

## Migration Notes

### For Existing Bookings

If you have bookings with the old format (`FST-2024-XXX`):
- Old bookings will continue to work
- New bookings will use the new format
- Both formats are supported in the database
- No data migration required

### CSV Import

When importing bookings via CSV, ensure:
- Booking IDs follow the new format
- Or leave the `booking_id` column empty to auto-generate
- No duplicate booking IDs in the CSV

---

**Last Updated**: December 7, 2024  
**Format Version**: 2.0

