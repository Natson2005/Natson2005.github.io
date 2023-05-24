<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Registrácia</title>
    <link rel="stylesheet" href="styles.css"/>
</head>
<body>
<nav>
    <a class="back" href="/index.php">Návrat</a>
    </nav>
<?php
    require('databaza.php');
    // Keď je formulár odoslaný (submit), vložia sa (insert) zadané hodnoty do databázy
    if (isset($_POST['submit'])) {
        $username = trim($_POST['username']);
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);

    // Skontroluje sa či meno alebo email už náhodou neexistujú v databáze
    $query = "SELECT * FROM users WHERE username='$username' OR email='$email'";
    $result = mysqli_query($con, $query);
    if (mysqli_num_rows($result) > 0) {
        echo "<div class='form'>
                <h3>Meno alebo email už existuje.</h3><br/>
                <p class='link'>Kliknite sem a <a href='registracia.php'>registrujte sa</a> znova.</p>
              </div>";
    } else {
        // Vytvorenie hash hodnoty hesla a uloženie hash hodnoty do databázy
        $password_hashed = password_hash($password, PASSWORD_DEFAULT);
        $create_datetime = date("Y-m-d H:i:s");
        $query = "INSERT INTO users (username, password, email, create_datetime)
                  VALUES ('$username', '$password_hashed', '$email', '$create_datetime')";
        $result = mysqli_query($con, $query);
        if ($result) {
            echo "<div class='form'>
                    <h3>Úspešne ste sa zaregistrovali !</h3><br/>
                    <p class='link'>Kliknite sem pre <a href='prihlasenie.php'>prihlásenie.</a></p>
                  </div>";
        } else {
            echo "<div class='form'>
                    <h3>Niečo sa pokazilo. Prosím skúste sa zaregistrovať znova.</h3><br/>
                    <p class='link'>Kliknite sem pre opakovanú <a href='registracia.php'>registráciu.</a></p>
                  </div>";
        }
    }
} else {
?>
<form class="form" method="post">
<h1 class="login-title">Registrácia</h1>
<input type="text" class="login-input" name="username" placeholder="Meno" required />
<input type="email" class="login-input" name="email" placeholder="Email" required />
<input type="password" class="login-input" name="password" placeholder="Heslo" required />
<input type="submit" name="submit" value="Register" class="login-button">
<p class="link">Máte už účet ? <a href="prihlasenie.php">Prihlásenie</a></p>
</form>

<?php
    }
?>
</body>
</html>
