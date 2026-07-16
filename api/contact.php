<?php
/**
 * MB Stounas Contact Form Handler
 * Receives POST JSON from React form and sends email to info@mbstounas.lt
 * 
 * Rate limiting: max 3 submissions per IP per hour (file-based)
 */

// --- Configuration ---
$to_email = 'info@stounas.lt';
$from_email = 'noreply@stounas.lt';
$subject_prefix = '[stounas.lt] Nauja užklausa';
$rate_limit_max = 3;
$rate_limit_window = 3600; // 1 hour in seconds
$allowed_origin = 'https://stounas.lt';

// --- Rate limiting ---
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_file = sys_get_temp_dir() . '/mbstounas_rate_' . md5($ip) . '.json';
$now = time();

$attempts = [];
if (file_exists($rate_file)) {
    $attempts = json_decode(file_get_contents($rate_file), true) ?: [];
}
// Purge old entries
$attempts = array_filter($attempts, fn($t) => $t > $now - $rate_limit_window);
if (count($attempts) >= $rate_limit_max) {
    http_response_code(429);
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'error' => 'Per daug užklausų. Bandykite vėliau. / Too many requests. Please try later.',
    ]);
    exit;
}
$attempts[] = $now;
file_put_contents($rate_file, json_encode(array_values($attempts)));

// --- CORS ---
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . $allowed_origin);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Parse input ---
$body = json_decode(file_get_contents('php://input'), true);

if (!$body) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name = trim($body['name'] ?? '');
$phone = trim($body['phone'] ?? '');
$email = trim($body['email'] ?? '');
$notes = trim($body['notes'] ?? '');
$lang = trim($body['lang'] ?? 'LT');

// --- Validation ---
$errors = [];
if (empty($name)) {
    $errors[] = 'Vardas yra privalomas / Name is required';
}
if (empty($phone)) {
    $errors[] = 'Telefonas yra privalomas / Phone is required';
} elseif (!preg_match('/^\+?[\d\s\-()]{7,20}$/', $phone)) {
    $errors[] = 'Neteisingas telefono formatas / Invalid phone format';
}
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Neteisingas el. pašto formatas / Invalid email format';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => implode('; ', $errors)]);
    exit;
}

// --- Sanitize ---
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$notes = htmlspecialchars($notes, ENT_QUOTES, 'UTF-8');

// --- Build email ---
$subject = "$subject_prefix - $name";
$message = "Nauja užklausa iš stounas.lt kontaktinės formos\n\n";
$message .= "--------------------------------------------------\n";
$message .= "Vardas / Name: $name\n";
$message .= "Telefonas / Phone: $phone\n";
if ($email) {
    $message .= "El. paštas / Email: $email\n";
}
$message .= "Kalba / Language: $lang\n";
$message .= "--------------------------------------------------\n\n";
if ($notes) {
    $message .= "Žinutė / Message:\n$notes\n\n";
}
$message .= "--------------------------------------------------\n";
$message .= "IP: $ip\n";
$message .= "Data / Date: " . date('Y-m-d H:i:s') . "\n";

$headers = [
    'From: ' . $from_email,
    'Reply-To: ' . ($email ?: $from_email),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

// --- Send ---
$sent = mail($to_email, $subject, $message, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Email sending failed. Please try again or contact us directly.']);
}
