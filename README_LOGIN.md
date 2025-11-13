# Login System for FST UIN Jakarta Classroom Booking

## Overview
This system implements a secure login mechanism that prevents access to the main application (index.html) without proper authentication.

## Features
- **Session-based authentication** using PHP sessions
- **Client-side backup** using localStorage
- **User type selection** (Student, Lecturer, Staff)
- **Automatic redirect** to login page for unauthenticated users
- **Secure logout** functionality
- **User information display** in the header

## Files Created/Modified

### New Files:
1. **session_check.php** - PHP session verification
2. **login_handler.php** - Processes login credentials
3. **logout.php** - Handles user logout
4. **.htaccess** - Server-level protection rules
5. **README_LOGIN.md** - This documentation

### Modified Files:
1. **index.html** - Added session check and logout functionality
2. **login.html** - Updated to use PHP backend

## How It Works

### 1. Access Control
- When a user tries to access `index.html`, the system checks for authentication
- If not logged in, they are automatically redirected to `login.html`
- Both client-side (localStorage) and server-side (PHP sessions) checks are performed

### 2. Login Process
- User enters credentials on `login.html`
- Form submits to `login_handler.php` via AJAX
- Valid credentials create a PHP session and localStorage entry
- User is redirected to `index.html`

### 3. Session Management
- PHP sessions provide server-side security
- localStorage provides client-side persistence
- Both are cleared on logout

### 4. Logout Process
- User clicks logout button in header
- Both PHP session and localStorage are cleared
- User is redirected to `login.html`

## Default Credentials
- **Username:** 1234567890
- **Password:** kelompok1keren
- **User Type:** Student/Lecturer/Staff (selectable)

## Security Features
- Session-based authentication
- Server-side validation
- Protected PHP files
- Security headers
- Automatic session cleanup

## Requirements
- PHP-enabled web server
- mod_rewrite enabled (for .htaccess rules)
- jQuery (already included)

## Installation
1. Upload all files to your web server
2. Ensure PHP sessions are enabled
3. Make sure mod_rewrite is enabled
4. Test the login system with default credentials

## Customization
- Modify `login_handler.php` to connect to your database
- Update credentials in `login_handler.php`
- Customize user types in `login.html`
- Modify session timeout in PHP configuration

## Troubleshooting
- If redirects don't work, check mod_rewrite is enabled
- If sessions don't persist, check PHP session configuration
- If AJAX fails, check file permissions and PHP error logs 