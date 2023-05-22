<?php
$to = "natansonoga2@gmail.com";
if (isset($_POST['submit'])) {
  $from = $_POST['email'];
  $meno = $_POST['first_name'];
  $priezvisko = $_POST['last_name'];
  $subject = "Odosielateľ:" . $first_name ." " . $last_name . " (" . $from . ")";
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