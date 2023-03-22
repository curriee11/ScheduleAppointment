<?php
// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $notes = $_POST['notes'];

    // Send email
    $to = $email;
    $subject = 'Appointment Scheduled';
    $message = "Hi $name,\n\nYour appointment has been scheduled for $date at $time.\n\nNotes: $notes\n\nThanks!";
    $headers = 'From: khushiagarwal78910@gmail.com' . "\r\n" .
        'Reply-To: 2020pcecskhushi210@poornima.org' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo 'Appointment scheduled successfully. Check your email for confirmation.';
    } else {
        echo 'Error scheduling appointment. Please try again later.';
    }
}
?>
