const ticketServices = require('../services/ticket');
const messageServices = require('../services/message');
const userServices =require('../services/user')

const db = require("../db/db");

exports.addTicket = async (req, res) => {
  res.status(200).send(await ticketServices.addTicket(req.body.name, req.body.lastname, req.body.email, req.body.title, req.body.description));
};

exports.allTickets = async (req, res) => {
  const data = [];
  new Promise((resolve, reject) => {
    db.all('SELECT * FROM TICKET', (err, rows) => {
      if (err) reject(err);
      rows.forEach((row) => {
        data.push(row);
      });
      resolve();
    });
  }).then(() => {
    res.json({
      Tickets: data,
    });
  }).catch(err => console.error(err));
};

exports.ticketWithId = async (req, res) => {
  if(req.params.ticketId == null) res.status(400);
  const ticketJson = await ticketServices.ticketWithId(req.params.ticketId);
  const messageJson = await messageServices.messagesWithTicketId(req.params.ticketId);
  const userJson = await userServices.userWithEmail(messageJson[0].emailUser);

  const responseJson = {
    ticket: ticketJson,
    user: userJson,
    messages: messageJson,
  };

  res.send(responseJson);
};