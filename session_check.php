<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.html');
    exit();
}

// Get user information
$username = isset($_SESSION['username']) ? $_SESSION['username'] : 'User';
$user_type = isset($_SESSION['user_type']) ? $_SESSION['user_type'] : 'Student';
?> 