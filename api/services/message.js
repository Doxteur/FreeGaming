// Importation connection
const db = require("../db/db");
const mailServices = require('../services/mail');

exports.addMessage = async (description, email, idTicket, emailUser) => {
  //Ajout du message dans la BDD
  sql = `INSERT INTO MESSAGE (description, date, emailUser, idTicket) VALUES(?,?,?,?)`;
  const now = new Date();
  db.run(sql, [description, now.toISOString().slice(0, 19).replace('T', ' '),email, idTicket], (err) => {
    if (err) console.log("Error insert message -> "+err.message);
  })
  if(emailUser != email) mailServices.sendMailWhenAdminSendMessage(emailUser, idTicket,now.toISOString().slice(0, 19).replace('T', ' à ')) 
  return 'Message created !';
}

exports.messagesWithTicketId = async (name) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM MESSAGE WHERE Idticket ='${name}'`, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}