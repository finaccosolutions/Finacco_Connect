<?php
require_once 'config.php';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

function generateLicenseKey($userId) {
    // Generate a unique 16-character license key
    $prefix = 'FC'; // Finacco Connect prefix
    $timestamp = dechex(time()); // Convert current timestamp to hex
    $random = bin2hex(random_bytes(4)); // Generate 8 random characters
    $checksum = substr(md5($userId . $timestamp . $random), 0, 4); // Generate 4-character checksum
    
    return $prefix . $timestamp . $random . $checksum;
}

function generateUserId() {
    // Generate a 6-digit user ID starting from 1 with zero padding
    $pdo = getDbConnection();
    $stmt = $pdo->query("SELECT MAX(user_id) as max_id FROM Licenses");
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $nextId = ($result['max_id'] ?? 0) + 1;
    return str_pad($nextId, 6, '0', STR_PAD_LEFT);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($data['name']) || !isset($data['email']) || !isset($data['phone'])) {
            throw new Exception('Missing required fields');
        }

        $pdo = getDbConnection();
        
        // Generate user ID and license key
        $userId = generateUserId();
        $licenseKey = generateLicenseKey($userId);
        
        // Insert into database
        $stmt = $pdo->prepare("INSERT INTO Licenses (user_id, license_key, name, email, phone, purchase_date) VALUES (?, ?, ?, ?, ?, NOW())");
        $stmt->execute([$userId, $licenseKey, $data['name'], $data['email'], $data['phone']]);
        
        // Send email with license key
        $to = $data['email'];
        $subject = "Your Finacco Connect License Key";
        $message = "Dear " . $data['name'] . ",\n\n";
        $message .= "Thank you for purchasing Finacco Connect!\n\n";
        $message .= "Your License Key: " . $licenseKey . "\n\n";
        $message .= "Please keep this key safe as you'll need it to activate your software.\n\n";
        $message .= "Best regards,\nFinacco Solutions Team";
        $headers = "From: support@finaccosolutions.com";
        
        mail($to, $subject, $message, $headers);
        
        echo json_encode([
            'success' => true,
            'message' => 'Payment processed successfully',
            'licenseKey' => $licenseKey
        ]);
        
    } catch (Exception $e) {
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
}
?>