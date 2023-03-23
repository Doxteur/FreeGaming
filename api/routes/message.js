// Importation d'Express
const express = require("express");

// Importation du controller ticket.js
const messageController = require("../controllers/message");

const router = express.Router();

router.post("/writeMessage/:ticketId", messageController.writeMessage);
// Exportation du module
module.exports =router;