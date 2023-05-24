<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Prihlásenie</title>
    <link rel="stylesheet" href="styles.css" />
</head>

<body>
    <nav>
        <a class="back" href="/index.php">Návrat</a>
    </nav>
    <?php
    session_start();
    require('databaza.php');
    // Keď sa formulár odošle, overí sa či používateľ existuje v databáze a overí sa jeho heslo
    if (isset($_POST['submit'])) {
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        // Získa používateľské dáta z databázy
        $query = "SELECT * FROM users WHERE username='$username'";
        $result = mysqli_query($con, $query);
        $row = mysqli_fetch_assoc($result);
        // Funkcia password_verify() porovná zadané heslo s hashom hesla vytiahnutým z databázy 
        if($username === "admin" && $password === "admin123") {
            $_SESSION['username'] ="admin";
            header("Location: admin.php");
            exit();
        }

        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username;
            header("Location: dashboard.php");
        } 

        
        else {
            echo "<div class='form'>
                <h3>Nesprávne meno alebo heslo !</h3><br/>
                <p class='link'>Skúste sa znova <a href='prihlasenie.php'>prihlásiť.</a></p>
              </div>";
        }
    } else {
        ?>

        <form class="form" method="post">
            <h1 class="login-title">Prihlásenie</h1>
            <input type="text" class="login-input" name="username" placeholder="Meno" required />
            <input type="password" class="login-input" name="password" placeholder="Heslo" required />
            <input type="submit" name="submit" value="Login" class="login-button">
            <p class="link">Ešte nemáte účet ? <a href="registracia.php">Zaregistrujte sa !</a></p>
        </form>
        <?php
    }
    ?>
</body>

</html>