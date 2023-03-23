// Importation d'Express
const express = require("express");

// Importation du controller ticket.js
const ticketController = require("../controllers/ticket");

const router = express.Router();

router.post("/addTicket", ticketController.addTicket);
router.get("/ticket", ticketController.allTickets);
router.get("/ticket/:ticketId", ticketController.ticketWithId);
router.delete("/ticket/:ticketId", ticketController.deleteTicket);
router.get("/openticket",ticketController.openTicket);
router.get("/closeticket",ticketController.closeTicket);
// Exportation du module
module.exports =router;