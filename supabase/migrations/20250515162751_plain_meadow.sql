CREATE TABLE IF NOT EXISTS Licenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(6) NOT NULL UNIQUE,
    license_key VARCHAR(32) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    purchase_date DATETIME NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);