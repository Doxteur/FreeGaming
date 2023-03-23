// Importation d'Express
const express = require("express");

// Importation du controller scan.js
const versionController = require("../controllers/version");

const router = express.Router();

router.get("/version", versionController.version);
// Exportation du module
module.exports =router;