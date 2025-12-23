# Fix: "SUPABASE_CONFIG is not defined" Error

## 🔴 Error Message

```
Error checking availability: SUPABASE_CONFIG is not defined
Semua 0 ruangan sudah terisi untuk waktu yang dipilih.
```

---

## 🎯 Quick Fix (5 Steps)

### Step 1: Test Connection
1. Open `test-supabase-connection.html` in your browser
2. Click "Run All Tests"
3. See which test fails

### Step 2: Check Script Loading
Open browser console (F12) and look for errors:

```
✅ Good:
"✅ Supabase client initialized successfully"

❌ Bad:
"SUPABASE_CONFIG is not defined"
"supabase is not defined"
"Failed to load resource"
```

### Step 3: Verify Files Exist
Make sure these files exist:
- [ ] `js/supabase-config.js`
- [ ] `js/database.js`
- [ ] `js/room-availability.js`

### Step 4: Check Internet Connection
The Supabase library loads from CDN. Make sure:
- [ ] You have internet connection
- [ ] CDN is accessible: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`

### Step 5: Verify Credentials
Open `js/supabase-config.js` and check:
```javascript
const SUPABASE_CONFIG = {
    url: 'https://lizifsqvksmtbmbulvyq.supabase.co',
    anonKey: 'eyJhbGciOi...' // Should be a long string
};
```

---

## 🔧 Common Causes & Solutions

### Cause 1: Files Moved or Missing

**Check:**
```
FSTBookingSystem/
└── js/
    ├── supabase-config.js ← Must exist
    ├── database.js ← Must exist
    └── room-availability.js ← Must exist
```

**Fix:** Make sure all 3 JavaScript files are in the `js/` folder

---

### Cause 2: CDN Blocked or No Internet

**Symptoms:**
- Error: "Failed to load script"
- Supabase library not loading

**Fix Option A - Check Internet:**
- Open https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2 in browser
- Should download a JavaScript file
- If it doesn't load, internet issue

**Fix Option B - Use Local Fallback:**
The system should automatically fall back to localStorage mode if Supabase isn't available.

---

### Cause 3: Syntax Error in Config File

**Check:**
Open `js/supabase-config.js` and verify:
- No missing quotes
- No missing commas
- No extra characters

**Correct format:**
```javascript
const SUPABASE_CONFIG = {
    url: 'https://lizifsqvksmtbmbulvyq.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpemlmc3F2a3NtdGJtYnVsdnlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNjU4NjIsImV4cCI6MjA4MDY0MTg2Mn0.sIz2NpEShAs7xFOialy9rBQPNLm9aEPPVdUMDhsijV8'
};
```

---

### Cause 4: Scripts Loading in Wrong Order

**Check** `booking-form.html` has scripts in this order:

```html
<!-- Must be in THIS order -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/supabase-config.js"></script>
<script src="js/database.js"></script>
<script src="js/room-availability.js"></script>
```

**Fix:** Make sure Supabase CDN loads BEFORE config file

---

### Cause 5: Cache Issue

**Fix:**
1. Hard refresh: Press **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
2. Or clear browser cache
3. Reload the page

---

## ✅ Quick Test in Console

Open browser console (F12) and run these commands:

### Test 1: Check if Supabase library loaded
```javascript
typeof window.supabase
// Should return: "object"
// If returns "undefined", CDN didn't load
```

### Test 2: Check config
```javascript
SUPABASE_CONFIG
// Should return: {url: "https://...", anonKey: "eyJ..."}
// If error, config file didn't load
```

### Test 3: Check client
```javascript
window.supabaseClient
// Should return: SupabaseClient object
// If null, initialization failed
```

### Test 4: Check BookingDB
```javascript
window.BookingDB
// Should return: Object with methods
// If undefined, database.js didn't load
```

### Test 5: Check RoomAvailability
```javascript
window.RoomAvailability
// Should return: Object with methods
// If undefined, room-availability.js didn't load
```

---

## 🚀 Temporary Workaround (LocalStorage Mode)

If Supabase won't work, the system can operate in localStorage-only mode:

**What works:**
- ✅ Creating bookings
- ✅ Viewing bookings
- ✅ Admin panel
- ✅ Status updates

**What doesn't work:**
- ❌ Data across devices
- ❌ Permanent storage (clears with cache)
- ❌ Multi-user synchronization

**How to enable:**
System automatically falls back if Supabase is unavailable!

---

## 🔍 Debug Mode

Add this to your browser console for detailed logs:

```javascript
// Enable verbose logging
localStorage.setItem('debug', 'true');

// Then reload the page and check console
```

---

## 📝 Step-by-Step Fix Procedure

### 1. Run Diagnostic
```
Open: test-supabase-connection.html
Click: "Run All Tests"
Note which test fails
```

### 2. Based on Results

**If Test 1 fails (Supabase library):**
- Check internet connection
- Try different browser
- Check if CDN is blocked (firewall/VPN)

**If Test 2 fails (Configuration):**
- Check `js/supabase-config.js` exists
- Verify no syntax errors
- Ensure file is in correct location

**If Test 3 fails (Client):**
- Clear cache (Ctrl+Shift+R)
- Check browser console for errors
- Reload scripts in correct order

**If Test 4 fails (Database):**
- Verify Supabase project still exists
- Check if database table 'bookings' exists
- Verify RLS policies are enabled

**If Test 5 fails (Fetch):**
- Check RLS policies allow SELECT
- Verify table has data
- Check network tab for blocked requests

---

## 🆘 Still Getting Error?

### Option 1: Use LocalStorage Mode
The system works fine without Supabase! Just use it locally.

### Option 2: Reinstall Supabase
1. Delete `js/supabase-config.js`
2. Delete `js/database.js`
3. Re-download from your backup
4. Or recreate following SUPABASE_SETUP_GUIDE.md

### Option 3: Check Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Find project: lizifsqvksmtbmbulvyq
3. Check if project is active (not paused)
4. Check if table 'bookings' exists
5. Verify RLS policies are enabled

---

## 💡 Most Likely Cause (After 30 Days)

### Supabase Free Tier Pause

Supabase **pauses inactive projects** after 7 days of inactivity!

**Solution:**
1. Go to Supabase dashboard
2. Find your project: https://supabase.com/dashboard/project/lizifsqvksmtbmbulvyq
3. If you see "**Project Paused**"
4. Click "**Resume Project**" or "**Restore**"
5. Wait 1-2 minutes
6. Test again!

---

## 🎯 Expected Console Output

When working correctly:

```
✅ Supabase client initialized successfully
Booking Data to be saved: {fullName: "...", ...}
Saved to currentBooking localStorage
Memeriksa ketersediaan ruangan...
(Shows availability: "15 dari 20 ruangan tersedia")
```

When NOT working:

```
❌ SUPABASE_CONFIG is not defined
⚠️ Supabase library not loaded
Falling back to localStorage mode
```

---

## 📞 Quick Checklist

- [ ] Run `test-supabase-connection.html`
- [ ] Check all 5 tests pass
- [ ] Verify internet connection
- [ ] Check Supabase project not paused
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Check browser console for errors
- [ ] Try different browser
- [ ] Verify files in correct location

---

## ✅ After Fix

Once fixed, you should see:
- ✅ Room availability shows correct numbers
- ✅ "X dari Y ruangan tersedia"
- ✅ Green/red indicators work
- ✅ Bookings save to Supabase
- ✅ Admin panel shows bookings

---

**Created:** January 2025  
**Issue:** SUPABASE_CONFIG not defined  
**Solution:** Check connection, verify config, resume paused project


