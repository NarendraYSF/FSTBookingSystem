<?php
session_start();

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $user_type = $_POST['user_type'] ?? 'Student';
    
    // Simple authentication (in production, use proper password hashing and database)
    if (($username === '1234567890' && $password === 'kelompok1keren') || 
        ($username === '12456789' && $password === 'kelompok1keren')) {
        // Set session variables
        $_SESSION['logged_in'] = true;
        $_SESSION['username'] = $username;
        $_SESSION['user_type'] = $user_type;
        
        // Return success response
        echo json_encode(['success' => true, 'redirect' => 'index.html']);
    } else {
        // Return error response
        echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
    }
} else {
    // If not POST request, redirect to login page
    header('Location: login.html');
    exit();
}
?> 