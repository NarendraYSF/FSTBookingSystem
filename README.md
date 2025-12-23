# FST Booking System - Room Reservation Management

A comprehensive web-based room booking system for Fakultas Sains dan Teknologi (FST) UIN Syarif Hidayatullah Jakarta.

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://vercel.com)
[![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?style=flat&logo=supabase)](https://supabase.com)
[![License](https://img.shields.io/badge/License-Educational-blue.svg)](LICENSE)

---

## 📋 Overview

This project is a **full-stack room booking management system** featuring:
- User booking interface with real-time availability checking
- Admin panel for managing bookings
- Room quota system to prevent overbooking
- Cloud database integration (Supabase)
- Real-time status updates

---

## ⚠️ Important Notice

**This project uses client-side authentication for EDUCATIONAL and DEMONSTRATION purposes.**

The admin credentials are obfuscated but can be accessed through browser developer tools. This is a known limitation of client-side authentication and is **acceptable for**:
- ✅ School/University projects
- ✅ Portfolio demonstrations
- ✅ Learning exercises
- ✅ Proof of concept

For production deployment, implement proper server-side authentication. See `IMPORTANT_SECURITY_WARNING.md` for details.

---

## ✨ Features

### For Users:
- 🏠 Clean, modern booking interface
- 📅 Real-time room availability checking
- 🆔 Unique booking ID generation
- 📊 Room quotas and capacity information
- 🔄 Live status updates (Pending/Approved/Rejected)
- 📱 Fully responsive design

### For Administrators:
- 🛡️ Secure admin login
- 📊 Dashboard with statistics
- 🔍 Search and filter bookings
- ✅ One-click approve/reject
- 👁️ Detailed booking information
- 📈 Real-time data synchronization

### System Features:
- 🏢 7 room types with individual quotas (50 total rooms)
- ⏰ Time overlap detection
- 💾 Cloud database (Supabase PostgreSQL)
- 🔄 Real-time status synchronization
- 🌐 Deploy to Vercel (CDN-backed)
- 📱 Mobile-responsive design

---

## 🏢 Room Types & Quotas

| Room Type | Quota | Capacity |
|-----------|:-----:|----------|
| Ruang Kelas Biasa | 20 | 35 people |
| Ruang Kelas Besar | 10 | 50 people |
| Lab Komputer | 5 | 30 people |
| Lab Mikrobiologi | 5 | 25 people |
| Ruang Teater Besar | 5 | 75 people |
| Ruang Teater Double Proyektor | 2 | 50 people |
| Ruang Meeting | 3 | 10 people |

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/FSTBookingSystem.git
cd FSTBookingSystem
```

### 2. Setup Supabase
Follow the guide: `SUPABASE_SETUP_GUIDE.md`
- Create Supabase project
- Create bookings table
- Configure credentials in `js/supabase-config.js`

### 3. Test Locally
Open `index.html` in your browser

### 4. Deploy to Vercel
Follow the guide: `DEPLOYMENT_GUIDE.md`

---

## 📚 Documentation

### Setup Guides:
- `QUICK_SETUP.md` - Quick start checklist (35 minutes)
- `SUPABASE_SETUP_GUIDE.md` - Database setup
- `DEPLOYMENT_GUIDE.md` - Deploy to Vercel

### Feature Documentation:
- `ADMIN_README.md` - Admin panel guide
- `ROOM_QUOTA_SYSTEM.md` - Quota management
- `BOOKING_ID_FORMAT.md` - ID generation
- `STATUS_REFRESH_FEATURE.md` - Real-time updates
- `BROWSER_REFRESH_FALLBACK.md` - Data persistence

### Security & Credentials:
- `CREDENTIALS.md` - 🔒 **PRIVATE** - Login details (not in repo)
- `IMPORTANT_SECURITY_WARNING.md` - Security limitations
- `SECURITY_NOTICE.md` - Security improvements

### Complete Reference:
- `COMPLETE_SYSTEM_FEATURES.md` - All features
- `FINAL_FEATURE_LIST.md` - Feature summary
- `CHANGES_SUMMARY.md` - Development changelog

---

## 🔑 Access Information

### User Login:
See `CREDENTIALS.md` for demo user credentials

### Admin Login:
See `CREDENTIALS.md` for admin credentials  
⚠️ **Keep CREDENTIALS.md private and secure!**

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Bootstrap 4, Custom CSS
- **Icons:** Font Awesome
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **Authentication:** Client-side (Demo) / Supabase Auth (Recommended)

---

## 📁 Project Structure

```
FSTBookingSystem/
├── Core Pages
│   ├── index.html              # Homepage
│   ├── login.html              # User login
│   ├── booking-form.html       # Booking form
│   ├── booking-confirmation.html # Confirmation
│   ├── admin-login.html        # Admin auth
│   └── admin-panel.html        # Admin dashboard
│
├── JavaScript
│   ├── js/supabase-config.js   # Database config
│   ├── js/database.js          # CRUD operations
│   ├── js/room-availability.js # Quota system
│   └── js/booking-manager.js   # Admin logic
│
├── Styles
│   └── css/style.css           # Main styles
│
├── Documentation (10+ guides)
│   └── *.md                    # Comprehensive docs
│
└── Testing Tools
    ├── test-booking-data.html
    ├── seed-sample-data.html
    └── *.csv
```

---

## 🧪 Testing Tools

- `test-booking-data.html` - Diagnostic tool
- `seed-sample-data.html` - Sample data generator
- `quick-start.html` - Interactive guide
- `supabase-bookings-sample-data.csv` - CSV import

---

## 🎯 Key Capabilities

- ✅ Prevents overbooking (quota system)
- ✅ Real-time availability checking
- ✅ Unique booking IDs (zero collision)
- ✅ Time overlap detection
- ✅ Status management (Pending/Approved/Rejected)
- ✅ Auto-refresh status updates
- ✅ Browser refresh data persistence
- ✅ Search & filter functionality
- ✅ Mobile responsive
- ✅ Cross-device data sync

---

## 📊 System Stats

- **Pages:** 15+
- **Features:** 50+
- **Room Types:** 7
- **Total Capacity:** 50 rooms
- **Documentation:** 10+ comprehensive guides
- **Lines of Code:** 5000+

---

## 🔐 Security Notes

### Current Implementation:
- Client-side authentication (obfuscated)
- Suitable for demonstration and educational purposes
- **Admin credentials visible in browser DevTools**

### For Production:
Implement one of these:
1. **Supabase Auth** (recommended for this project)
2. **Backend server** with bcrypt + JWT
3. **Firebase Authentication**

See `IMPORTANT_SECURITY_WARNING.md` for complete security analysis.

---

## 🚀 Deployment

### Vercel (Recommended):
1. Push to GitHub
2. Import in Vercel
3. Deploy (automatic)

### Manual:
- Upload to any static hosting
- Requires Supabase database setup

---

## 🤝 Contributing

This is an educational project. Feel free to:
- Fork for learning
- Improve security implementation
- Add features
- Enhance UI/UX

---

## 📜 License

Educational/Portfolio Project  
Developed by: Narendra Yusuf  
Institution: FST UIN Syarif Hidayatullah Jakarta

---

## 📞 Support

For questions or issues:
1. Check the comprehensive documentation in `/docs`
2. Review `TROUBLESHOOTING_BOOKING_DATA.md`
3. See `IMPORTANT_SECURITY_WARNING.md` for security questions

---

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack web development
- Database integration (Supabase)
- Real-time data synchronization
- Admin panel design
- Quota/availability management
- Authentication systems (client-side)
- Deployment to cloud platforms
- Comprehensive documentation

---

## 🎉 Acknowledgments

- **UIN Syarif Hidayatullah Jakarta** - Educational institution
- **Supabase** - Database platform
- **Vercel** - Hosting platform
- **Bootstrap & Font Awesome** - UI components

---

## ⭐ If You Find This Useful

- Star this repository
- Use it for learning
- Improve the security for production use
- Share with fellow students

---

**Version:** 2.0 (Complete)  
**Status:** ✅ Production-Ready (with security considerations)  
**Last Updated:** December 7, 2024

---

**Built with ❤️ for educational purposes**



