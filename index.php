<?php
require("login/email.php")
  ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Nátan Sonoga</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
  <link rel="stylesheet" href="main.css">
</head>
<style>
  body {
    font-family: Arial, sans-serif;
  }

  .container {

    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }

  form {
    color: black;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 5px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }

  textarea {
    resize: vertical;
    height: 120px;
  }

  input[type="submit"] {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
</style>

<body data-spy="scroll" data-target=".navbar" data-offset="50">

  <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="login/index.php">
      <img src="img/logo.png" class="img-fluid " style="width:50px" alt="...">
      Životopis</a>
    <button class="navbar-toggler btn-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon btn"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#about">O mne</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">Skúsenosti</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#education">Vzdelanie</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Schopnosti</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#interests">Záujmy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">

    <section class="container mt-50" id="about">
      <br><br><br><br>
      <div class="row">
        <div class="col-md-6">
          <img src="img/P8084673.jpg" class="img-fluid rounded" alt="">
        </div>
        <div class="card col-md-6 justify-content-center">
          <div class="card-body text-dark text-center">
            <h5 class="card-title">O mne</h5>
            <p class="card-text">Dobrý deň volám sa Nátan Sonoga, mám 17 rokov, chodím do 2.ročníka v odbore
              Inteligentné technológie na Súkromnej strednej odbornej škole Ul.29. Augusta v Poprade.
              Študujem predmety ako napríklad programovanie, počítačové siete a dizajn digitálnych sietí. Medzi moje
              obľúbené predmety patrí matematika a fyzika.
              Vo vľnom čase hrám videohry, chodím na volejbal a šipky.
            </p>
          </div>
        </div>
      </div>
      <br>
      <div class="row justify-content-between">
        <div class="card text-dark col-md-5 text-center">
          <h1>Kontakt</h1>
          <div class="subheading">
            · (+421) 948-073-634 <br> · natansonoga2@gmail.com
          </div>
        </div>
        <div class="card text-dark col-md-5 text-center">
          <h1>Adresa</h1>
          <div class="subheading">
            · 3370/21 ulica Letná <br> · Poprad, 05801 <br> · Slovensko</div>
        </div>
      </div>
    </section>
    <br><br>
    <section id="experience" class="text-dark">
      <h2>Skúsenosti</h2>
      <div class="card container justify-content-between mb-3">
        <div>
          <h5 class="card-title">CoraGeo</h5>
          <div class="subheading">Odborná prax</div>
          <p class="card-text">
            V 2. som išiel na odbornú prax doi firmy CoraGeo v Poprade, kde som prehĺbilsvoje vedomosti z
            oblasti programovania a pracovania s dátami.Prax trvala 5 dní a jednou s úloh bolo aj vytvorenie tejto
            stránky.
          </p>
        </div>
        <div class="date text-md-right">Máj 2023</div>
      </div>

    </section>

    <section id="education" class="text-dark">
      <h2>Vzdelanie</h2>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-img col-md-5 img-fluid">
            <img src="img/ssosta.jpg" width="50%" class="card-img" alt="...">
          </div>
          <div class="col-md-7 justify-content-center">
            <div class="card-body text-dark text-center">
              <p class="card-text"> Študujem na Súkromnej strednej odbornej škole ul. 29 Augusta v Poprade, odbor
                Inteligentné technológie. V rámci tohto odboru študujem programovanie(Python,PHP,), počítačové site
                (konfigurácia a údržba sietí) a
                Dizajn digitálnych médií(HTML a CSS). Plánujem doštudovať a zmaturovať z týchto predmetov a potom si
                nájsť prácu kde by
                som mohol tieto vedomosti využiť v praxi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> <br>


    <section id="skills" class="text-dark">
      <h2>Zručnosti</h2>
      <div class="skills-bar card">
        <div class="bar">
          <div class="info">
            <span>HTML</span>
          </div>
          <div class="progress-line"><span class="html"></span></div>
          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line"><span class="css"></span></div>
            <div class="bar">
              <div class="info">
                <span>BOOTSTRAP</span>
              </div>
              <div class="progress-line"><span class="bootstrap"></span></div>
              <div class="bar">
                <div class="info">
                  <span>JAVASCRIPT</span>
                </div>
                <div class="progress-line"><span class="javascript"></span></div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>MS OFFICE</span>
                </div>
                <div class="progress-line"><span class="office"></span></div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>ANGLIČTINA</span>
                </div>
                <div class="progress-line"><span class="anj"></span></div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>NEMČINA</span>
                </div>
                <div class="progress-line"><span class="nem"></span></div>
              </div>
            </div>
          </div>
    </section>
    <br>
    <section id="interests" class="text-dark">
      <h2>Záujmy</h2>
      <div class="card">
        <p class="card-text">
          Vo voľnom čase hrávam volejbal a šipky v škole. Rád hrám videohry, čítam dobrodružnú a sci-fi literatúru.
          Občas
          kreslím.
        </p>
      </div>
    </section>
    <br>
    <section id="contact" class="gradiant">
      <div>
        <div class="row justify-content-center align-items-center text-center m-4">
          <div class="col-md-12 gap-3">
            <h1>Ak máte ďaľšie otázky môžete mi napísať tu:</h1> <br>

            <form method="post">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Meno" aria-label="Username" name="first_name">
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Priezvisko" aria-label="Username" name="last_name">
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="E-mailova adresa" aria-label="Username"
                  name="email">
              </div> <br>
              <div class="input-group">
                <span class="input-group-text">Správa</span>
                <textarea class="form-control" aria-label="With textarea" placeholder="Tu napíšte vašu správu"
                  name="message"></textarea>
              </div> <br>
              <button type="submit" class="btn btn-dark mb-2" name="submit">Odoslať</button> <br>
            </form><br>
            <footer>
              <h6 class="text-center">Vytvoril Nátan Sonoga, 2023</h6>
            </footer>
          </div>
        </div>
      </div>
    </section>

  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="main.js"></script>

</body>

</html>