<?php
    session_start();
    if(!isset($_SESSION["username"])) {
        header("Location: prihlasenie.php");
        exit();
    }
?>



