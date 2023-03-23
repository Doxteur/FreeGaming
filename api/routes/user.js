// Importation d'Express
const express = require("express");

// Importation du controller ticket.js
const userController = require("../controllers/user");

const router = express.Router();

router.get("/user", userController.allUsers);
// Exportation du module
module.exports =router;