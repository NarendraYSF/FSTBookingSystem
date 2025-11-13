<?php
/**
 * PHP Server Test File
 * This file checks if PHP is working correctly
 */

header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Test - FST Booking</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 {
            color: #667eea;
            margin-top: 0;
        }
        .success {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #28a745;
            margin: 15px 0;
        }
        .info {
            background: #d1ecf1;
            color: #0c5460;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #17a2b8;
            margin: 15px 0;
        }
        .warning {
            background: #fff3cd;
            color: #856404;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #ffc107;
            margin: 15px 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background: #667eea;
            color: white;
            font-weight: 600;
        }
        tr:hover {
            background: #f5f5f5;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            margin: 10px 5px;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background: #764ba2;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .btn-success {
            background: #28a745;
        }
        .btn-success:hover {
            background: #218838;
        }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>✅ PHP Server Test</h1>
        
        <div class="success">
            <strong>🎉 SUCCESS!</strong> PHP is working correctly!
        </div>

        <h2>📊 Server Information</h2>
        <table>
            <tr>
                <th>Parameter</th>
                <th>Value</th>
            </tr>
            <tr>
                <td><strong>PHP Version</strong></td>
                <td><?php echo phpversion(); ?></td>
            </tr>
            <tr>
                <td><strong>Server Software</strong></td>
                <td><?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'; ?></td>
            </tr>
            <tr>
                <td><strong>Server Name</strong></td>
                <td><?php echo $_SERVER['SERVER_NAME'] ?? 'localhost'; ?></td>
            </tr>
            <tr>
                <td><strong>Server Port</strong></td>
                <td><?php echo $_SERVER['SERVER_PORT'] ?? '80'; ?></td>
            </tr>
            <tr>
                <td><strong>Document Root</strong></td>
                <td><?php echo $_SERVER['DOCUMENT_ROOT'] ?? 'N/A'; ?></td>
            </tr>
            <tr>
                <td><strong>Current Date/Time</strong></td>
                <td><?php echo date('Y-m-d H:i:s'); ?></td>
            </tr>
            <tr>
                <td><strong>Time Zone</strong></td>
                <td><?php echo date_default_timezone_get(); ?></td>
            </tr>
        </table>

        <h2>🔍 PHP Extensions Check</h2>
        <table>
            <tr>
                <th>Extension</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>JSON</td>
                <td><?php echo extension_loaded('json') ? '✅ Loaded' : '❌ Not Loaded'; ?></td>
            </tr>
            <tr>
                <td>cURL</td>
                <td><?php echo extension_loaded('curl') ? '✅ Loaded' : '❌ Not Loaded'; ?></td>
            </tr>
            <tr>
                <td>MySQLi</td>
                <td><?php echo extension_loaded('mysqli') ? '✅ Loaded' : '❌ Not Loaded'; ?></td>
            </tr>
            <tr>
                <td>PDO</td>
                <td><?php echo extension_loaded('pdo') ? '✅ Loaded' : '❌ Not Loaded'; ?></td>
            </tr>
            <tr>
                <td>MBString</td>
                <td><?php echo extension_loaded('mbstring') ? '✅ Loaded' : '❌ Not Loaded'; ?></td>
            </tr>
        </table>

        <h2>🧪 Chatbot API Test</h2>
        <div class="info">
            <strong>ℹ️ Info:</strong> Click the button below to test the chatbot API endpoint.
        </div>
        
        <button class="btn btn-success" onclick="testChatbotAPI()">Test Chatbot API</button>
        
        <div id="api-result" style="margin-top: 20px;"></div>

        <h2>📝 Next Steps</h2>
        <div class="warning">
            <strong>⚠️ Important:</strong> Now that PHP is working, you can test the actual website:
        </div>
        
        <a href="index.html" class="btn">🏠 Go to Main Website</a>
        <a href="api/chatbot.php" class="btn" target="_blank">🤖 Test API Directly</a>

        <h2>💡 Tips</h2>
        <ul>
            <li>Always access the site via <code>http://localhost</code> not <code>file:///</code></li>
            <li>Check browser console (F12) for JavaScript errors</li>
            <li>Check Network tab to see API calls</li>
            <li>Make sure the <code>api/chatbot.php</code> file exists</li>
        </ul>
    </div>

    <script>
        async function testChatbotAPI() {
            const resultDiv = document.getElementById('api-result');
            resultDiv.innerHTML = '<div class="info">⏳ Testing API...</div>';

            try {
                const response = await fetch('api/chatbot.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: 'apa itu fst' })
                });

                const data = await response.json();

                if (data.success) {
                    resultDiv.innerHTML = `
                        <div class="success">
                            <strong>✅ API Test SUCCESS!</strong><br><br>
                            <strong>Request:</strong> "apa itu fst"<br><br>
                            <strong>Response:</strong><br>
                            ${data.response}
                        </div>
                    `;
                } else {
                    resultDiv.innerHTML = `
                        <div class="warning">
                            <strong>⚠️ API returned an error:</strong><br>
                            ${data.error || 'Unknown error'}
                        </div>
                    `;
                }
            } catch (error) {
                resultDiv.innerHTML = `
                    <div class="warning">
                        <strong>❌ API Test FAILED!</strong><br><br>
                        <strong>Error:</strong> ${error.message}<br><br>
                        <strong>Possible causes:</strong>
                        <ul>
                            <li>File <code>api/chatbot.php</code> not found</li>
                            <li>CORS issue (check browser console)</li>
                            <li>Server not running properly</li>
                        </ul>
                    </div>
                `;
            }
        }
    </script>
</body>
</html>



