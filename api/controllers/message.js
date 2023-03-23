const messageServices = require('../services/message');
const db = require("../db/db");
exports.writeMessage = async (req, res) => {
  console.log(req.body.email);
  if(req.params.ticketId == null || req.body.description == null || req.body.email == null) return res.status(400).send('bad arguments');
  if(await checkTicket(req.params.ticketId)) return res.status(400).send("ticket doesn't exist");
  messageServices.addMessage(req.body.description,req.body.email,req.params.ticketId);
  return res.status(200).send('Successfully');
};


async function checkTicket(id){
  db.all(`SELECT * FROM TICKET WHERE id = '${id}'`, (err, rows) => {
    if (err) reject(err);
    if (rows.length != 0) {
      return true;
    } else {
      return false;
    }
  })
}