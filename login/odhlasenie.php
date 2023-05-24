<?php
    session_start();
    // Zatvorí session
    if(session_destroy()) {
        // Presmeruje na prihlásenie
        header("Location: prihlasenie.php");
    }
?>
