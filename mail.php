<?php
$to = "natansonoga2@gmail.com";
if (isset($_POST['submit'])) {
  $from = $_POST['email'];
  $subject = "Odosielateľ:" . $from;
  $message = $_POST['message'];


  $header_array = [
    "Content/type: text/html; charset=UTF-8",
    "From:" . $from
  ];

  $headers = implode("\r\n", $header_array);
  mail($to, $subject, $message, $headers);
  header('Location: index.php');
}
?>