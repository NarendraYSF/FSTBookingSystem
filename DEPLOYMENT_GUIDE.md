# Complete Deployment Guide - FST Booking System to Vercel with Supabase

This guide will walk you through deploying your FST Booking System to Vercel with a real database backend using Supabase.

---

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- Supabase account (free)
- Your project code ready

---

## Part 1: Setup Supabase Database (15 minutes)

### Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Click "Start your project" → Sign up (use GitHub)
3. Click "New Project"
4. Fill in:
   - **Organization**: Your organization
   - **Name**: `fst-booking-system`
   - **Database Password**: Create strong password (SAVE IT!)
   - **Region**: `Southeast Asia (Singapore)` (closest to Indonesia)
   - **Plan**: Free
5. Click "Create new project"
6. ⏰ Wait 2-3 minutes for setup

### Step 2: Create Database Table

1. In Supabase dashboard, click "**SQL Editor**" (left sidebar)
2. Click "**+ New query**"
3. Copy and paste this SQL code:

```sql
-- Create bookings table
CREATE TABLE bookings (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    booking_id text UNIQUE NOT NULL,
    full_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    institution text,
    booking_date date NOT NULL,
    start_time time NOT NULL,
    end_time time NOT NULL,
    room_type text NOT NULL,
    participants text,
    purpose text,
    description text,
    additional_facilities jsonb DEFAULT '[]'::jsonb,
    status text DEFAULT 'pending' NOT NULL,
    created_at timestamptz DEFAULT now() NOT NULL,
    updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies (allow public access for demo)
CREATE POLICY "Enable read access for all users"
ON bookings FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable insert for all users"
ON bookings FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Enable update for all users"
ON bookings FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_created_at ON bookings(created_at);
```

4. Click "**RUN**" (bottom right)
5. You should see "Success. No rows returned"

### Step 3: Get Your API Credentials

1. Click "**Settings**" (gear icon, left sidebar)
2. Click "**API**"
3. You'll see:
   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **Project API keys**:
     - `anon` `public` - Copy this!
     - `service_role` `secret` - DON'T use this in frontend

4. **Copy these values** - you'll need them in the next step:
   ```
   Project URL: https://your-project-id.supabase.co
   anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
   ```

---

## Part 2: Configure Your Project (5 minutes)

### Step 4: Update Supabase Config File

1. Open your project in VS Code / Cursor
2. Find the file: `js/supabase-config.js`
3. Replace the placeholder values:

```javascript
const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL_HERE',  // Replace with your Project URL
    anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE'  // Replace with your anon key
};
```

**Example (with your actual values):**
```javascript
const SUPABASE_CONFIG = {
    url: 'https://abcdefghijk.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...'
};
```

4. **Save the file** (Ctrl+S / Cmd+S)

### Step 5: Commit Changes to Git

Open terminal in your project folder and run:

```bash
git add .
git commit -m "Add Supabase integration for database storage"
git push
```

---

## Part 3: Deploy to Vercel (10 minutes)

### Step 6: Connect GitHub Repository

1. Go to https://vercel.com
2. Click "**Sign Up**" (use GitHub account)
3. Click "**Add New Project**"
4. Find your repository: `FSTBookingSystem`
5. Click "**Import**"

### Step 7: Configure Project Settings

1. **Project Name**: `fst-booking-system` (or your choice)
2. **Framework Preset**: Leave as "Other"
3. **Root Directory**: `./` (leave default)
4. **Build Command**: Leave empty
5. **Output Directory**: Leave empty
6. **Install Command**: Leave empty

### Step 8: Deploy!

1. Click "**Deploy**"
2. ⏰ Wait 1-2 minutes
3. You'll see: 🎉 "**Congratulations! Your project has been deployed**"
4. Click "**Visit**" to see your live site

### Step 9: Get Your Live URL

Your site will be live at:
```
https://your-project-name.vercel.app
```

Example:
```
https://fst-booking-system.vercel.app
```

---

## Part 4: Test Your Deployment (5 minutes)

### Step 10: Test Booking Creation

1. Go to your Vercel URL
2. Navigate to booking form
3. Fill out and submit a booking
4. You should see confirmation page

### Step 11: Test Admin Panel

1. Go to `https://your-url.vercel.app/admin-login.html`
2. Login with: `admin` / `admin123`
3. You should see your booking in the dashboard!

### Step 12: Verify Data in Supabase

1. Go back to Supabase dashboard
2. Click "**Table Editor**"
3. Click "**bookings**" table
4. You should see your test booking! ✅

---

## 🎉 Success! Your System is Live!

Your FST Booking System is now:
- ✅ Deployed to Vercel (globally accessible)
- ✅ Connected to Supabase database (real data persistence)
- ✅ Working across all devices and browsers
- ✅ Shareable with anyone via URL

---

## 🔗 Important URLs

Save these URLs:

```
Main Website: https://your-project.vercel.app
Booking Form: https://your-project.vercel.app/booking-form.html
Admin Login: https://your-project.vercel.app/admin-login.html
Admin Panel: https://your-project.vercel.app/admin-panel.html
```

---

## 🔧 Updating Your Site

When you make changes:

```bash
# Make your changes in code
git add .
git commit -m "Description of changes"
git push
```

Vercel will **automatically redeploy** in 1-2 minutes! ✨

---

## 🚨 Troubleshooting

### Problem: "Bookings not appearing in admin panel"

**Check:**
1. Did you update `js/supabase-config.js` with your credentials?
2. Open browser console (F12) - any errors?
3. Go to Supabase → Table Editor → Check if data is there

**Solution:**
- Verify your Supabase URL and anon key are correct
- Make sure you ran the SQL to create policies
- Clear browser cache and try again

### Problem: "Error creating booking"

**Check:**
1. Browser console for error messages
2. Supabase → Table Editor → SQL ran successfully?
3. RLS policies are created?

**Solution:**
- Rerun the SQL from Step 2
- Check that all policies are green/enabled in Supabase

### Problem: "Admin panel shows 0 bookings but Supabase has data"

**Check:**
- Browser console for errors
- Network tab (F12) - are requests to Supabase failing?

**Solution:**
- Check Supabase credentials in config file
- Verify RLS policies allow SELECT operations

### Problem: "Vercel deployment failed"

**Check:**
- GitHub repository is public or Vercel has access
- No build errors in Vercel logs

**Solution:**
- Since this is a static site, there should be no build errors
- Contact Vercel support if issue persists

---

## 💡 Pro Tips

### Custom Domain (Optional)

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In Vercel dashboard → Settings → Domains
3. Add your custom domain
4. Follow DNS instructions
5. Wait for SSL certificate (automatic)

### Environment Variables (For Security)

For production, it's better to use environment variables:

1. In Vercel dashboard → Settings → Environment Variables
2. Add:
   - `SUPABASE_URL`: your URL
   - `SUPABASE_KEY`: your anon key
3. Update code to use `process.env.SUPABASE_URL`

### Monitoring

- Vercel provides analytics (Settings → Analytics)
- Supabase provides database metrics (Dashboard → Database)

### Backups

- Supabase Free tier: 7-day backups
- Paid tier: 30-day backups + point-in-time recovery

---

## 📊 What You've Achieved

✅ **Real Database**: Data persists across sessions and devices  
✅ **Global CDN**: Fast loading worldwide via Vercel  
✅ **Auto HTTPS**: Secure connection automatically  
✅ **Real-time Updates**: Admin sees bookings instantly  
✅ **Scalable**: Handles thousands of bookings  
✅ **Professional**: Production-ready deployment  

---

## 🎓 Next Steps

Want to enhance your system?

1. **Add Email Notifications** (using SendGrid or Resend)
2. **User Authentication** (Supabase Auth)
3. **File Uploads** (for booking attachments)
4. **Calendar View** (using FullCalendar)
5. **Analytics Dashboard** (booking trends, popular rooms)

---

## 📚 Resources

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Need Help?**: Check `ADMIN_README.md` for detailed system documentation

---

**🎉 Congratulations on deploying your system!**

Your FST Booking System is now live and ready for real users!

---

*Last updated: December 2024*
