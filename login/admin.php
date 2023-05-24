<?php
include("autentifikacia.php");
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Dashboard - Stránka Admina</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th,
        td {
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: #F5F5F5;
        }
        tr:nth-child(even) {
            background-color: #FAFAFA;
        }
        tr:hover {
            background-color: #F0F0F0;
        }
        body {
            font-family: Arial, sans-serif;
        }
        nav {
            background-color: #333;
            color: white;
            padding: 10px;
        }
        .form {
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ddd;
        }
        .form p {
            margin: 0 0 10px;
        }
        .back {
            color: white;
            text-decoration: none;
        }
        .back:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <nav>
        <a class="back" href="/index.php">Návrat</a>
    </nav>
    <div class="form">
        <p>Ahojte, Admin!</p>
        <p>Nachádzate sa na stránke správcu.</p>
        <p class></p>
        <p><a href="odhlasenie.php">Odhlásiť sa</a></p>
    </div>

    <?php
    session_start();
    if ($_SESSION['username'] == "admin") {
        require('databaza.php');
        $query = "SELECT * FROM form";
        $result = mysqli_query($con, $query);


        echo "<div>";
        echo "<table>";
        echo "<thead><tr><th>Meno</th><th>Priezvisko</th><th>Email</th><th>Správa</th></tr></thead>";
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>
                    <td>" . $row['meno'] . "</td>
                    <td>" . $row['priezvisko'] . "</td>
                    <td>" . $row['email'] . "</td>
                    <td>" . $row['sprava'] . "</td>
                </tr>";
            }
            echo "</table>";
        }
        
        echo "</div>" ;
    } 
    ?>
</body>

</html>