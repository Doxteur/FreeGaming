// Importation d'Express
const express = require("express");

// Importation du controller ticket.js
const ticketController = require("../controllers/ticket");

const router = express.Router();

router.get("/addTicket", ticketController.addTicket);
// Exportation du module
module.exports =router;