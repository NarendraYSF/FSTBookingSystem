@echo off
echo ========================================
echo    FST BOOKING - LOCAL TEST SERVER
echo ========================================
echo.
echo Checking for PHP installation...

where php >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] PHP is not installed or not in PATH!
    echo.
    echo Please install PHP first:
    echo 1. XAMPP: https://www.apachefriends.org/download.html
    echo    OR
    echo 2. PHP Standalone: https://windows.php.net/download/
    echo.
    echo After installation, run this script again.
    echo.
    pause
    exit /b 1
)

echo [OK] PHP found!
php --version
echo.
echo ========================================
echo Starting PHP Development Server...
echo ========================================
echo.
echo Server Address: http://localhost:8000
echo Chatbot API:    http://localhost:8000/api/chatbot.php
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

start http://localhost:8000/index.html

php -S localhost:8000

