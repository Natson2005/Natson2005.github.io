<?php
require("databaza.php");
$to = "ns@natansonoga.studenthosting.sk";
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


  $query = "INSERT INTO form(meno, priezvisko, email, sprava) values('$meno','$priezvisko','$from','$message')";
  mysqli_query($con,$query);
}
?>