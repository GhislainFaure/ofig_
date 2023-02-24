// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();
const session = require("express-session");

const express = require("express");



// on importe le router
const router = require("./app/router");

// un peu de config
const PORT = process.env.PORT || 5000;

const app = express();

// réglages d'express pour utiliser ejs et le bon dossier de views.
app.set('view engine', 'ejs');
app.set('views', './app/views');

// mise en place de express-session
app.use(session({
  secret: "dlhsjdhfurehuhfurhuhrhuhgoeurhgurhgfurhgg",
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60) // Une heure
  }
}));

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static("integration"));

// routage !
app.use(router);

// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT} motherfucker !!! `);
});
