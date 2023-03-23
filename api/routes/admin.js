// Importation d'Express
const express = require("express");

// Importation du controller scan.js
const adminController = require("../controllers/admin");

const router = express.Router();

router.post("/register", adminController.register);

router.post("/login", (req, res) => {

});

router.get("/version", versionController.version);
// Exportation du module
module.exports =router;