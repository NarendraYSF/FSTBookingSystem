// Supabase Configuration
// Replace these with your actual Supabase credentials after setup

const SUPABASE_CONFIG = {
    url: 'https://lizifsqvksmtbmbulvyq.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpemlmc3F2a3NtdGJtYnVsdnlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNjU4NjIsImV4cCI6MjA4MDY0MTg2Mn0.sIz2NpEShAs7xFOialy9rBQPNLm9aEPPVdUMDhsijV8'
};

// Instructions:
// 1. Follow SUPABASE_SETUP_GUIDE.md to create your Supabase project
// 2. Copy your Project URL and anon key from Supabase dashboard
// 3. Replace the values above with your actual credentials
// 4. Save this file
// 
// Example:
// const SUPABASE_CONFIG = {
//     url: 'https://abcdefghijk.supabase.co',
//     anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
// };

// Initialize Supabase client with error handling
let supabase = null;

try {
    if (typeof window.supabase !== 'undefined') {
        supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        window.supabaseClient = supabase;
        console.log('✅ Supabase client initialized successfully');
    } else {
        console.warn('⚠️ Supabase library not loaded. Check if CDN is accessible.');
        console.warn('Falling back to localStorage mode.');
        window.supabaseClient = null;
    }
} catch (error) {
    console.error('❌ Error initializing Supabase:', error);
    console.warn('Falling back to localStorage mode.');
    window.supabaseClient = null;
}

