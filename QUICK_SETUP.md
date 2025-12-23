# Quick Setup Checklist - Supabase + Vercel

Follow these steps in order. ✅ Check each box as you complete it.

---

## 📝 Checklist

### 1️⃣ Supabase Setup (10 minutes)

- [ ] Go to https://supabase.com and sign up
- [ ] Create new project: `fst-booking-system`
- [ ] Choose region: Singapore (Southeast Asia)
- [ ] Save your database password somewhere safe
- [ ] Wait for project to finish setting up (2-3 min)

### 2️⃣ Create Database (5 minutes)

- [ ] Click "SQL Editor" in Supabase dashboard
- [ ] Click "+ New query"
- [ ] Copy SQL from `DEPLOYMENT_GUIDE.md` Step 2
- [ ] Paste and click "RUN"
- [ ] Verify: "Success. No rows returned"

### 3️⃣ Get API Credentials (2 minutes)

- [ ] Click "Settings" → "API" in Supabase
- [ ] Copy your **Project URL**: `https://xxxx.supabase.co`
- [ ] Copy your **anon key**: `eyJhbGc...`
- [ ] Save both somewhere (you'll need them next)

### 4️⃣ Update Config File (3 minutes)

- [ ] Open `js/supabase-config.js` in your code editor
- [ ] Replace `YOUR_SUPABASE_URL_HERE` with your Project URL
- [ ] Replace `YOUR_SUPABASE_ANON_KEY_HERE` with your anon key
- [ ] Save the file (Ctrl+S)

### 5️⃣ Test Locally (Optional - 5 minutes)

- [ ] Open `index.html` in your browser
- [ ] Try creating a test booking
- [ ] Check if it appears in Supabase (Table Editor → bookings)
- [ ] If yes, proceed! If no, check troubleshooting below

### 6️⃣ Push to GitHub (2 minutes)

Open terminal in your project folder:

- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Add Supabase integration"`
- [ ] Run: `git push`
- [ ] Verify: Changes appear on GitHub

### 7️⃣ Deploy to Vercel (5 minutes)

- [ ] Go to https://vercel.com and sign up with GitHub
- [ ] Click "Add New Project"
- [ ] Select your `FSTBookingSystem` repository
- [ ] Click "Import"
- [ ] Leave all settings as default
- [ ] Click "Deploy"
- [ ] Wait 1-2 minutes
- [ ] Click "Visit" to see your live site!

### 8️⃣ Test Live Site (5 minutes)

- [ ] Create a test booking on live site
- [ ] Login to admin panel: `/admin-login.html`
- [ ] Login with admin credentials (see `CREDENTIALS.md` file - keep this file secure!)
- [ ] Verify booking appears in admin panel
- [ ] Check Supabase dashboard - booking should be there
- [ ] Try approving/rejecting the booking
- [ ] ✅ **Success!**

---

## 🎯 Your URLs After Deployment

```
Main Site:    https://your-project.vercel.app
Booking Form: https://your-project.vercel.app/booking-form.html
Admin Login:  https://your-project.vercel.app/admin-login.html
```

---

## 🆘 Quick Troubleshooting

### Bookings not saving?
→ Check browser console (F12) for errors
→ Verify Supabase credentials in `supabase-config.js`

### Admin panel empty?
→ Refresh the page
→ Check Supabase Table Editor - is data there?
→ If yes, check RLS policies (see DEPLOYMENT_GUIDE.md)

### Vercel deployment failed?
→ Check Vercel deployment logs
→ Make sure changes are pushed to GitHub
→ For static sites, deployment should never fail

---

## ⏱️ Total Time: ~35 minutes

Once you complete this checklist, your booking system will be:
- ✅ Live on the internet
- ✅ Accessible from any device
- ✅ Storing real data in a database
- ✅ Ready for users!

---

## 📖 Need More Details?

- Full step-by-step: See `DEPLOYMENT_GUIDE.md`
- Database setup: See `SUPABASE_SETUP_GUIDE.md`
- System features: See `ADMIN_README.md`

---

**🚀 Let's get your system live!**



