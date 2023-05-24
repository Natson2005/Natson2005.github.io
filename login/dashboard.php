<?php
    include("autentifikacia.php");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dashboard - Stránka klienta</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
<nav>
    <a class="back" href="/index.php">Návrat</a>
    </nav>
    <div class="form">
        <p>Ahojte, <?php echo $_SESSION['username']; ?>!</p>
        <p>Nachádzate sa na stránke používateľa.</p>
        <p><a href="odhlasenie.php">Odhlásiť sa</a></p>
    </div>
</body>
</html>
