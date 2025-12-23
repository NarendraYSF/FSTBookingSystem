# Troubleshooting: Booking Confirmation Not Showing Data

## Issue: Default/Placeholder Data Showing Instead of Real Booking Info

If you see this on the confirmation page:
- Name: John Doe
- Email: john.doe@example.com
- Phone: +62 812-3456-7890
- etc.

This means the booking data isn't being loaded properly.

---

## 🔍 Step-by-Step Debugging

### Step 1: Check Browser Console

1. **Open Developer Tools**
   - Press `F12` on your keyboard
   - Or right-click → Inspect → Console tab

2. **Look for these messages:**
   ```
   ✅ Good:
   "Booking Data to be saved: {fullName: '...', email: '...', ...}"
   "Saved to currentBooking localStorage"
   "=== BOOKING CONFIRMATION PAGE LOADED ==="
   "Current Booking Data: {fullName: '...', email: '...', ...}"
   
   ❌ Bad:
   "Current Booking Data: null"
   "No booking data found in localStorage"
   "Error parsing currentBooking"
   ```

3. **If you see null or errors:**
   - The data isn't being saved properly
   - Continue to Step 2

---

### Step 2: Check localStorage Manually

1. **In Console tab, type:**
   ```javascript
   localStorage.getItem('currentBooking')
   ```

2. **You should see:**
   ```
   "{\"bookingId\":\"FST-20241207-...\",\"fullName\":\"Your Name\",...}"
   ```

3. **If you see `null`:**
   - Data wasn't saved from booking form
   - Go back to booking form and check console there

---

### Step 3: Test Booking Form

1. **Open `booking-form.html`**
2. **Open Console (F12)**
3. **Fill out the form completely**
4. **Click Submit**
5. **Look for these console messages:**
   ```
   "Booking Data to be saved: {...}"
   "Saved to currentBooking localStorage"
   "Memeriksa ketersediaan ruangan..."
   "Mengirim reservasi..."
   ```

6. **Check localStorage again:**
   ```javascript
   localStorage.getItem('currentBooking')
   ```

---

### Step 4: Verify Data Structure

The `currentBooking` should have these fields:

```javascript
{
  "fullName": "Your Name",        // ← Should NOT be empty
  "email": "your@email.com",      // ← Should NOT be empty
  "phone": "+62 812...",          // ← Should NOT be empty
  "institution": "FST...",
  "bookingDate": "2024-12-15",
  "startTime": "09:00",
  "endTime": "11:00",
  "roomType": "ruang-kelas-biasa",
  "participants": "11-25",
  "purpose": "kuliah",
  "description": "...",
  "additionalFacilities": [...],
  "bookingId": "FST-20241207-...",
  "status": "pending",
  "createdAt": "2024-12-07T..."
}
```

---

## 🐛 Common Issues & Solutions

### Issue 1: "localStorage.getItem('currentBooking') returns null"

**Cause:** Data not saved from booking form

**Solution:**
1. Check if you're being redirected too quickly
2. Check if form submission has errors
3. Try increasing timeout in booking form:
   ```javascript
   setTimeout(() => {
       window.location.href = 'booking-confirmation.html';
   }, 2000);  // Increase from 1500 to 2000
   ```

### Issue 2: "Data shows but immediately changes to default"

**Cause:** `currentBooking` is being cleared too early

**Solution:**
- I've already added a 2-second delay before clearing
- If still happening, comment out this line in `booking-confirmation.html`:
  ```javascript
  // localStorage.removeItem('currentBooking');
  ```

### Issue 3: "Some fields show correctly, others show default"

**Cause:** Field names don't match between form and confirmation

**Solution:**
Check field names in booking form match confirmation page:
- Form uses: `fullName`, `email`, `phone`, etc.
- Confirmation expects: `fullName`, `email`, `phone`, etc.

### Issue 4: "Error: Cannot read property of null"

**Cause:** Page loaded before data was saved

**Solution:**
1. Make sure you clicked submit on booking form
2. Don't refresh confirmation page manually
3. Let the redirect happen automatically

---

## ✅ Quick Fix Testing

### Test 1: Manual Data Entry

In browser console on confirmation page, run:

```javascript
// Set test data
const testData = {
    fullName: "Test User",
    email: "test@example.com",
    phone: "+62 812-1234-5678",
    institution: "FST UIN Jakarta",
    bookingDate: "2024-12-15",
    startTime: "09:00",
    endTime: "11:00",
    roomType: "ruang-kelas-biasa",
    participants: "11-25",
    purpose: "kuliah",
    description: "Test booking",
    additionalFacilities: ["projector"],
    bookingId: "FST-20241207-100000-1234",
    status: "pending",
    createdAt: new Date().toISOString()
};

localStorage.setItem('currentBooking', JSON.stringify(testData));

// Refresh page
location.reload();
```

**Expected:** Page should show "Test User" and all test data

**If it works:** The confirmation page is fine, issue is with booking form
**If it doesn't work:** Issue is with confirmation page loading logic

---

### Test 2: Check Form Data Before Submit

In booking form, in console, before clicking submit:

```javascript
// Check form data
const form = document.getElementById('bookingForm');
const formData = new FormData(form);
const data = Object.fromEntries(formData);
console.log('Form data:', data);
```

**Expected:** Should show all your entered data

---

### Test 3: Bypass Redirect for Testing

In booking-form.html, temporarily comment out redirect:

```javascript
// setTimeout(() => {
//     window.location.href = 'booking-confirmation.html';
// }, 1500);

console.log('Check localStorage now!');
```

Then check if data is in localStorage before redirect.

---

## 🔧 Manual Fix

If automatic loading doesn't work, add URL parameters:

### In booking-form.html (temporary fix):

```javascript
// Build URL with data
const params = new URLSearchParams({
    fullName: bookingData.fullName,
    email: bookingData.email,
    phone: bookingData.phone,
    // ... etc
});

window.location.href = 'booking-confirmation.html?' + params.toString();
```

### In booking-confirmation.html:

```javascript
// Read from URL if localStorage fails
if (!bookingData || !bookingData.fullName) {
    const params = new URLSearchParams(window.location.search);
    bookingData = {
        fullName: params.get('fullName'),
        email: params.get('email'),
        // ... etc
    };
}
```

---

## 📝 Debugging Checklist

Run through this checklist:

1. [ ] Open booking-form.html
2. [ ] Open browser console (F12)
3. [ ] Fill out form completely
4. [ ] Click submit button
5. [ ] Check console for "Booking Data to be saved"
6. [ ] Check console for "Saved to currentBooking localStorage"
7. [ ] In console, run: `localStorage.getItem('currentBooking')`
8. [ ] Should see JSON string with your data
9. [ ] Page redirects to confirmation
10. [ ] Check console for "=== BOOKING CONFIRMATION PAGE LOADED ==="
11. [ ] Check console for "Parsed Booking Data"
12. [ ] Data should match what you entered

**If any step fails, note which step and check the corresponding solution above.**

---

## 💡 Expected Console Output

### On Booking Form:
```
Booking Data to be saved: {fullName: "Ahmad Rizki", email: "ahmad@example.com", ...}
Saved to currentBooking localStorage
Memeriksa ketersediaan ruangan...
Mengirim reservasi...
```

### On Confirmation Page:
```
=== BOOKING CONFIRMATION PAGE LOADED ===
Raw currentBooking from localStorage: "{"fullName":"Ahmad Rizki",...}"
Parsed Booking Data: {fullName: "Ahmad Rizki", email: "ahmad@example.com", ...}
Confirmation page loaded with data: {fullName: "Ahmad Rizki", ...}
```

---

## 🆘 Still Not Working?

If none of the above works:

1. **Clear all localStorage:**
   ```javascript
   localStorage.clear();
   ```

2. **Refresh both pages** (Ctrl+F5)

3. **Try again from scratch**

4. **Check if Supabase is blocking:**
   - Temporarily disable Supabase check
   - Use localStorage only mode

5. **Share console errors** for further debugging

---

**Last Updated**: December 7, 2024



