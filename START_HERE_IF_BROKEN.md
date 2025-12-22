# ⚠️ START HERE IF SYSTEM NOT WORKING

## 🔴 Problem: "SUPABASE_CONFIG is not defined" or Availability Shows "0 ruangan"

If you haven't used the system for 30+ days, your Supabase project was likely **paused automatically**.

---

## 🚀 QUICK FIX (2 minutes)

### Step 1: Resume Your Supabase Project

1. Go to: **https://supabase.com/dashboard**
2. Login to your account
3. Find project: **fst-booking-system** (or lizifsqvksmtbmbulvyq)
4. If you see **"Project Paused"** or **"Inactive"**:
   - Click **"Resume Project"** or **"Restore"**
   - Wait 1-2 minutes
5. Your project should now be **Active** ✅

### Step 2: Test Connection

1. Open `test-supabase-connection.html` in browser
2. Click **"Run All Tests"**
3. All tests should pass ✅

### Step 3: Test Booking

1. Open `booking-form.html`
2. Select a room, date, and time
3. Should show: **"X dari Y ruangan tersedia"** ✅

---

## 💡 Why This Happens

**Supabase Free Tier Policy:**
- Projects inactive for 7+ days → Paused automatically
- Paused projects → Database inaccessible
- Result → Your app can't check availability

**Solution:**
- Resume the project (takes 1 minute)
- Or upgrade to paid plan (no auto-pause)

---

## 🔧 Alternative: Work Without Supabase

If you can't resume Supabase (or don't want to), the system can work in **localStorage mode**:

### How to Enable:

The system automatically detects if Supabase is unavailable and falls back to localStorage!

**What works:**
- ✅ Booking creation
- ✅ Admin panel
- ✅ Status updates
- ✅ Quota checking

**Limitations:**
- ❌ Data only in your browser
- ❌ Lost if cache cleared
- ❌ Can't share across devices

---

## 🧪 Diagnostic Tools

### 1. Test Supabase Connection
```
Open: test-supabase-connection.html
Result: See which component is failing
```

### 2. Test Booking Data
```
Open: test-booking-data.html
Result: Check if localStorage is working
```

### 3. Browser Console
```
Press: F12
Tab: Console
Look for: Red error messages
```

---

## 📋 Troubleshooting Checklist

- [ ] **Supabase project active?** (Check dashboard)
- [ ] **Internet connection working?** (Can you browse normally?)
- [ ] **Files in correct location?** (js/ folder has all scripts)
- [ ] **Browser cache cleared?** (Try Ctrl+Shift+R)
- [ ] **Scripts loading?** (Check network tab in DevTools)
- [ ] **Console errors?** (Check F12 console)

---

## 🎯 Most Common Issues

### Issue 1: Supabase Paused ⭐ MOST LIKELY
**Symptom:** Worked before, stopped after 30 days  
**Fix:** Resume project in Supabase dashboard

### Issue 2: No Internet
**Symptom:** Scripts won't load  
**Fix:** Check connection, try different network

### Issue 3: Files Missing
**Symptom:** "script not found" errors  
**Fix:** Verify all js/ files exist

### Issue 4: Cache
**Symptom:** Old code running  
**Fix:** Hard refresh (Ctrl+Shift+R)

---

## ✅ When Fixed, You'll See:

### On Booking Form:
```
✅ Room info displays correctly
✅ "15 dari 20 ruangan tersedia" (real numbers)
✅ Green indicator when available
✅ Red indicator when full
✅ Can submit bookings
```

### In Console:
```
✅ Supabase client initialized successfully
✅ No error messages
✅ Availability checks complete
```

---

## 🆘 Emergency Contacts

### If Still Broken:

1. **Read:** `FIX_SUPABASE_ERROR.md` (detailed guide)
2. **Run:** `test-supabase-connection.html` (diagnostic)
3. **Check:** Browser console (F12) for specific errors
4. **Try:** localStorage mode (works offline)

---

## 📞 Quick Links

- **Supabase Dashboard:** https://supabase.com/dashboard/project/lizifsqvksmtbmbulvyq
- **Diagnostic Tool:** `test-supabase-connection.html`
- **Detailed Fix:** `FIX_SUPABASE_ERROR.md`
- **Credentials:** `CREDENTIALS.md`

---

## 🎉 TL;DR (Too Long, Didn't Read)

**Problem:** System not working after 30 days  
**Cause:** Supabase project paused (inactive)  
**Fix:** Go to Supabase → Resume Project  
**Time:** 2 minutes

---

**Updated:** January 2025  
**Status:** ✅ FIX AVAILABLE
