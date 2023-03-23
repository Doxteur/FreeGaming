// Importation d'Express
const express = require("express");

// Importation du controller ticket.js
const ticketController = require("../controllers/ticket");

const router = express.Router();

router.post("/addTicket", ticketController.addTicket);
router.get("/ticket", ticketController.allTickets);
router.get("/ticket/:ticketId", ticketController.ticketWithId);
// Exportation du module
module.exports =router;