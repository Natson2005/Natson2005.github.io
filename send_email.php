<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'natansonoga2@gmail.com';
$subject = 'New message from website contact form';
$headers = "From: $name <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

$body = "<h2>New Message</h2>";
$body .= "<p><strong>Name:</strong> $name</p>";
$body .= "<p><strong>Email:</strong> $email</p>";
$body .= "<p><strong>Message:</strong> $message</p>";


if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully!';
} else {
    echo 'An error occurred while sending the message.';
}
?>
