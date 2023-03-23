// Importation d'Express
const express = require("express");

// Importation des routes
const versionRoutes = require("./routes/version");
const ticketRoutes = require("./routes/ticket");
const userRoutes = require("./routes/user");

// Importation connexion base de donnée mysql
const mysql = require("./db/db");

// Pour créer l'application express
const app = express();

// Importation de body-parser
const bodyParser = require("body-parser");

// Gérer les problèmes de CORS
app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Acces-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Acces-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    next();
});

// Transformer le corps en json objet javascript utilisable
app.use(bodyParser.json());

//Les routes vers mes controller
app.use("/api",versionRoutes)
app.use("/api",ticketRoutes)
app.use("/api",userRoutes)
// Exportation de app.js pour pouvoir y accéder depuis un autre fichier
module.exports = app;
