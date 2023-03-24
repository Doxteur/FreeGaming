const ticketServices = require('../services/ticket');
const messageServices = require('../services/message');
const userServices =require('../services/user')

const db = require("../db/db");

exports.addTicket = async (req, res) => {
  const ticketId = await ticketServices.addTicket(req.body.name, req.body.lastname, req.body.email, req.body.title, req.body.description)
  console.log(ticketId);
  res.json(ticketId);
};

exports.allTickets = async (req, res) => {
  try {
    const data = await new Promise((resolve, reject) => {
      db.all("SELECT * FROM ticket ORDER BY datetime(date) DESC;", (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
    res.json({ Tickets: data });
  } catch (err) {
    console.error(err);
    res.status(500).send("Une erreur s'est produite lors de la récupération des tickets.");
  }
};

exports.ticketWithId = async (req, res) => {
  if (req.params.ticketId == null) return res.status(400);
  const [ticketJson, messageJson] = await Promise.all([
    ticketServices.ticketWithId(req.params.ticketId),
    messageServices.messagesWithTicketId(req.params.ticketId),
  ]);
  let userJson = {}
  if(messageJson[0] != null) {
    userJson = await userServices.userWithEmail(messageJson[0].emailUser);
  }
  
  const responseJson = {
    ticket: ticketJson,
    user: userJson,
    messages: messageJson,
  };

  return res.send(responseJson);
};


exports.deleteTicket = async (req, res) => {
  if(req.params.ticketId == null) return res.status(400);
  db.run(`DELETE FROM TICKET WHERE id='${req.params.ticketId}'`, (err) => {
    if (err) console.log("Error delete ticket -> "+err);
  })
  return res.send('Deleted !');
};

exports.closeTicket = async (req, res) => {
  if(req.params.ticketId == null) return res.status(400);
  db.run(`UPDATE TICKET SET STATUS = "CLOSE" WHERE id='${req.params.ticketId}'`, (err) => {
    if (err) console.log("Error close ticket -> "+err);
  })

  return res.send('Closed !');
}


exports.openTicket = async (req, res) => {
  if(req.params.ticketId == null) return res.status(400);
  db.run(`UPDATE TICKET SET STATUS = "OPEN" WHERE id='${req.params.ticketId}'`, (err) => {
    if (err) console.log("Error close ticket -> "+err);
  })
  
  return res.send('Closed !');
}