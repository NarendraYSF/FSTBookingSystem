# 🚀 Local Server Setup Guide - FST Booking System

## ❌ MASALAH: 
File HTML dibuka langsung (`file:///`) → PHP tidak jalan → Chatbot error

## ✅ SOLUSI: Jalankan melalui Web Server

---

## 📦 **OPTION 1: XAMPP (Recommended for Beginners)**

### Install XAMPP:
1. Download: https://www.apachefriends.org/download.html
2. Install ke `C:\xampp`
3. Buka **XAMPP Control Panel**
4. Klik **Start** pada Apache

### Setup Project:
1. Copy seluruh folder `sharan` ke: `C:\xampp\htdocs\`
2. Buka browser: `http://localhost/sharan/index.html`
3. ✅ Chatbot seharusnya berfungsi!

---

## ⚡ **OPTION 2: PHP Built-in Server (Fastest for Testing)**

### Install PHP Standalone:

#### Windows:
1. Download: https://windows.php.net/download/
2. Pilih: **PHP 8.x - Thread Safe (ZIP)**
3. Extract ke: `C:\php`
4. Tambahkan `C:\php` ke **PATH** environment variable:
   - Klik kanan **This PC** → Properties
   - Advanced System Settings → Environment Variables
   - Edit **Path** → Add New → `C:\php`

### Run Server:
1. Buka **Command Prompt** atau **PowerShell**
2. Navigate ke folder project:
   ```bash
   cd "C:\Users\Narendra Yusuf\Desktop\sharan"
   ```
3. Jalankan server:
   ```bash
   php -S localhost:8000
   ```
4. Buka browser: `http://localhost:8000/index.html`

### Atau Gunakan Script Otomatis:
**Double-click:** `START_SERVER.bat`
- Script akan otomatis cek PHP
- Jalankan server di port 8000
- Buka browser otomatis

---

## 🔧 **OPTION 3: VS Code + Live Server Extension**

**CATATAN:** Live Server extension **TIDAK SUPPORT PHP** secara default!

Tapi bisa digunakan untuk UI testing (tanpa chatbot):
1. Install extension: **Live Server** (Ritwick Dey)
2. Right-click `index.html` → **Open with Live Server**
3. ⚠️ Chatbot tidak akan jalan karena PHP tidak dieksekusi

---

## 🧪 **Testing Chatbot API**

### Test API Endpoint Langsung:

1. **Buka terminal di folder project**
2. **Test API dengan curl:**
   ```bash
   curl -X POST http://localhost:8000/api/chatbot.php \
     -H "Content-Type: application/json" \
     -d "{\"message\":\"apa itu fst\"}"
   ```

3. **Expected Response:**
   ```json
   {
     "success": true,
     "response": "Fakultas Sains dan Teknologi (FST) UIN Jakarta..."
   }
   ```

### Atau test via browser console:
1. Buka `http://localhost:8000/index.html`
2. Klik **F12** (Developer Tools)
3. Tab **Console**, jalankan:
   ```javascript
   fetch('api/chatbot.php', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({message: 'apa itu fst'})
   })
   .then(r => r.json())
   .then(d => console.log(d))
   ```

---

## 🐛 **Troubleshooting**

### Error: "Failed to fetch"
- ✅ Pastikan web server berjalan
- ✅ Buka via `http://localhost` bukan `file:///`
- ✅ Cek path API: `api/chatbot.php` exist

### Error: "PHP not found"
- ✅ Install PHP atau XAMPP
- ✅ Tambahkan ke PATH environment variable
- ✅ Restart terminal/command prompt

### Error: "Access denied" atau "404 Not Found"
- ✅ Pastikan file `api/chatbot.php` ada
- ✅ Cek permissions folder `api/`
- ✅ Cek Apache/PHP configuration

### Chatbot tidak muncul sama sekali
- ✅ Clear browser cache (Ctrl+F5)
- ✅ Cek browser console untuk JavaScript errors
- ✅ Pastikan `index.html` ter-load dengan benar

---

## 🎯 **Quick Start Checklist**

- [ ] Install XAMPP atau PHP standalone
- [ ] Copy project ke `htdocs` atau run PHP built-in server
- [ ] Buka browser: `http://localhost:8000/index.html`
- [ ] Test chatbot dengan kirim pesan
- [ ] Cek browser console (F12) untuk errors
- [ ] Verify API response di Network tab

---

## 📞 **Support**

Jika masih error:
1. Cek browser console (F12 → Console tab)
2. Cek network tab untuk API calls
3. Pastikan PHP version >= 7.4
4. Disable antivirus/firewall sementara untuk testing

---

## ✅ **Success Indicators**

Chatbot berfungsi jika:
- ✅ Browser URL: `http://localhost:xxxx` (bukan `file:///`)
- ✅ Chatbot icon muncul di kanan bawah
- ✅ Kirim pesan → dapat response dari server
- ✅ Network tab shows: POST `api/chatbot.php` → Status 200 OK
- ✅ No CORS errors di console

**Happy Testing! 🚀**



