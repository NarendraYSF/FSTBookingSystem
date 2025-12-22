# Supabase Setup Guide for FST Booking System

## Step 1: Create Supabase Account

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub (recommended) or email
4. Free tier gives you:
   - 500MB database
   - 50,000 monthly active users
   - 2GB bandwidth
   - Perfect for this project!

## Step 2: Create New Project

1. Click "New Project"
2. Fill in:
   - **Name**: `fst-booking-system`
   - **Database Password**: Create a strong password (SAVE THIS!)
   - **Region**: Choose closest to Indonesia (Singapore recommended)
   - **Pricing Plan**: Free
3. Click "Create new project"
4. Wait 2-3 minutes for setup

## Step 3: Get Your API Keys

1. In your project dashboard, click "Settings" (gear icon)
2. Click "API" in the left menu
3. You'll see:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **Project API keys**:
     - `anon` key (public) - This is safe to use in frontend
     - `service_role` key (secret) - DON'T use in frontend

4. **COPY THESE TWO**:
   ```
   Project URL: https://your-project.supabase.co
   anon key: eyJhbGc....(very long string)
   ```

## Step 4: Create Database Table

1. In Supabase dashboard, click "Table Editor"
2. Click "Create a new table"
3. Fill in:
   - **Name**: `bookings`
   - **Description**: Room bookings for FST
   - Enable "Enable Row Level Security (RLS)": ✅ Check this

4. Add these columns one by one (click "+ Add column" for each):

**Column 1: id (Primary Key)**
- Name: `id`
- Type: `uuid`
- Default Value: `gen_random_uuid()`
- Check: ☑ Is Primary Key
- Leave other options unchecked

**Column 2: booking_id**
- Name: `booking_id`
- Type: `text`
- Default Value: (leave empty)
- Check: ☑ Is Unique
- Uncheck: ☐ Is Nullable

**Column 3: full_name**
- Name: `full_name`
- Type: `text`
- Default Value: (leave empty)
- Uncheck: ☐ Is Nullable

**Column 4: email**
- Name: `email`
- Type: `text`
- Default Value: (leave empty)
- Uncheck: ☐ Is Nullable

**Column 5: phone**
- Name: `phone`
- Type: `text`
- Default Value: (leave empty)
- Uncheck: ☐ Is Nullable

**Column 6: institution**
- Name: `institution`
- Type: `text`
- Default Value: (leave empty)
- Check: ☑ Is Nullable

**Column 7: booking_date**
- Name: `booking_date`
- Type: `date`
- Default Value: (leave empty)
- Uncheck: ☐ Is Nullable

**Column 8: start_time**
- Name: `start_time`
- Type: `time`
- Default Value: (leave empty)
- Uncheck: ☐ Is Nullable

**Column 9: end_time**
- Name: `end_time`
- Type: `time`
- Default Value: (leave empty)
- Uncheck: ☐ Is Nullable

**Column 10: room_type**
- Name: `room_type`
- Type: `text`
- Default Value: (leave empty)
- Uncheck: ☐ Is Nullable

**Column 11: participants**
- Name: `participants`
- Type: `text`
- Default Value: (leave empty)
- Check: ☑ Is Nullable

**Column 12: purpose**
- Name: `purpose`
- Type: `text`
- Default Value: (leave empty)
- Check: ☑ Is Nullable

**Column 13: description**
- Name: `description`
- Type: `text`
- Default Value: (leave empty)
- Check: ☑ Is Nullable

**Column 14: additional_facilities**
- Name: `additional_facilities`
- Type: `jsonb`
- Default Value: `'[]'::jsonb` (type this exactly)
- Check: ☑ Is Nullable

**Column 15: status**
- Name: `status`
- Type: `text`
- Default Value: `'pending'` (type with single quotes)
- Uncheck: ☐ Is Nullable

**Column 16: created_at**
- Name: `created_at`
- Type: `timestamptz`
- Default Value: `now()`
- Uncheck: ☐ Is Nullable

**Column 17: updated_at**
- Name: `updated_at`
- Type: `timestamptz`
- Default Value: (leave empty)
- Check: ☑ Is Nullable

5. Click "Save" after adding all columns

## Step 5: Set Up Row Level Security (RLS) Policies

### Method 1: Using Templates (EASIEST - Recommended)

1. In Supabase dashboard, click **"Authentication"** → **"Policies"** (left sidebar)
2. Find your `bookings` table
3. Click **"New Policy"**
4. You'll see a dialog with **Templates** on the right side

**Policy 1: Enable Read Access**
1. On the right side, under **Templates**, find and click on:
   - **"Enable read access for all users"** (has a **SELECT** badge)
2. Click **"Use this template"** or **"Review"**
3. The form will auto-fill with the correct settings
4. Click **"Save policy"**

**Policy 2: Enable Insert Access**
1. Click **"New Policy"** again
2. On the right side templates, click on:
   - **"Enable insert for authenticated users only"** (has an **INSERT** badge)
3. **IMPORTANT**: After selecting, you need to change one setting:
   - In the form, find **"Target Roles"**
   - Change from "authenticated" to **"public"** (or leave as default for all)
4. Click **"Save policy"**

**Policy 3: Enable Update Access**
1. Click **"New Policy"** again
2. No template for UPDATE, so create it manually:
3. Fill in the form:
   - **Policy Name**: `Enable update for all users`
   - **Table**: `public.bookings` (should be auto-selected)
   - **Policy Behavior**: `Permissive`
   - **Policy Command**: Select **UPDATE** (click the UPDATE radio button)
   - **Target Roles**: Leave as "Defaults to all (public) roles if none selected"
4. In the code editor section, you'll see two areas to fill:
   - **Line 7 (using statement)**: Delete the comment and type: `true`
   - **Line 9 (with check statement)**: Delete the comment and type: `true`
   
   Your code should look like this:
   ```
   using (
     true
   ) with check (
     true
   );
   ```

5. Click **"Save policy"**

---

### Method 2: Using SQL Editor (FASTER for all at once)

If templates are confusing, use SQL instead:

1. Click **"SQL Editor"** (left sidebar)
2. Click **"+ New query"**
3. Copy and paste this entire code:

```sql
-- Enable RLS (if not already enabled)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow everyone to read bookings
CREATE POLICY "Enable read access for all users"
ON bookings FOR SELECT
TO public
USING (true);

-- Policy 2: Allow everyone to insert bookings
CREATE POLICY "Enable insert for all users"
ON bookings FOR INSERT
TO public
WITH CHECK (true);

-- Policy 3: Allow everyone to update bookings
CREATE POLICY "Enable update for all users"
ON bookings FOR UPDATE
TO public
USING (true)
WITH CHECK (true);
```

4. Click **"RUN"** (bottom right corner)
5. You should see: **"Success. No rows returned"**
6. ✅ Done! All 3 policies created at once!

---

### Verify Policies Were Created

1. Go to **Authentication** → **Policies**
2. Find your `bookings` table
3. You should see **3 policies**:
   - ✅ Enable read access for all users (SELECT)
   - ✅ Enable insert for all users (INSERT)  
   - ✅ Enable update for all users (UPDATE)

---

### ⚠️ Common Mistakes

**Error: "syntax error at or near CREATE"**
- Don't use the UI's code editor to write CREATE statements
- Use SQL Editor instead, OR use the template buttons
- The UI code editor is only for the `USING` expression, not full SQL

**Policy not showing up?**
- Make sure you clicked "Save policy"
- Refresh the page
- Check if RLS is enabled on the table

## Step 6: Test Your Setup

1. Go to "Table Editor"
2. Click on `bookings` table
3. Try "Insert row" manually
4. If it works, you're ready!

## Step 7: Copy Your Credentials

Create a file named `.env.local` or note these somewhere safe:

```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGc....your-anon-key
```

⚠️ **NEVER commit the service_role key to GitHub!**
✅ The anon key is safe to use in frontend code

---

## What's Next?

After completing these steps:
1. You'll have your Supabase URL
2. You'll have your anon key
3. Return to the main setup and update the config file

## Troubleshooting

**Can't create table?**
- Make sure you completed project setup
- Try refreshing the page

**Policies not working?**
- Make sure RLS is enabled
- Check SQL syntax in policies

**Forgot password?**
- Go to Settings → Database → Reset database password

---

**Need help?** Check Supabase docs: https://supabase.com/docs

