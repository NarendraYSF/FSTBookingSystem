# Room Quotas - Quick Reference

## 📊 Room Availability

| Room Type | Quota | Icon |
|-----------|:-----:|:----:|
| Ruang Kelas Biasa | **20** | 🏫 |
| Ruang Kelas Besar | **10** | 🏛️ |
| Lab Komputer | **5** | 💻 |
| Lab Mikrobiologi | **5** | 🔬 |
| Ruang Teater Besar | **5** | 🎭 |
| Ruang Teater Double Proyektor | **2** | 🎬 |
| Ruang Meeting | **3** | 🤝 |

**Total Rooms**: 50

---

## ✅ How Users See It

### When Selecting Room & Time:

**Available:**
```
✓ Ruangan Tersedia
15 dari 20 ruangan tersedia
```

**Full:**
```
✗ Ruangan Penuh
Semua 20 ruangan sudah terisi
Silakan pilih waktu lain
```

---

## 🎯 Quick Rules

1. **Time overlaps** = Uses same quota
2. **Adjacent times** (09:00-11:00 & 11:00-13:00) = Don't overlap
3. **Only pending/approved count** toward quota
4. **Rejected bookings** don't block slots
5. **Real-time checking** before submission

---

## 🔧 For Admins

### Change Quotas
Edit: `js/room-availability.js`

```javascript
const ROOM_QUOTAS = {
    'ruang-kelas-biasa': 20,  // ← Change here
    'ruang-kelas-besar': 10,
    // etc...
};
```

### Monitor Usage
- View bookings in admin panel
- Filter by room type
- Check time slot density
- Identify popular times

---

## 📱 User Experience Flow

```
1. Select Room → See quota info
2. Select Date & Time → See availability
3. Submit → Re-check availability
4. ✅ Confirm → If available
   ❌ Error → If full
```

---

## 💡 Tips

**For Users:**
- Check availability before filling long forms
- Book early for popular time slots
- Consider alternative rooms if full

**For Admins:**
- Monitor quota usage patterns
- Adjust quotas based on demand
- Approve bookings quickly to free up pending slots

---

**Updated**: Dec 7, 2024

