// Importation connection
const db = require("../db/db");
const mailServices = require('../services/mail');

exports.addMessage = async (description, emailUser, idTicket) => {
  //Ajout du message dans la BDD
  sql = `INSERT INTO MESSAGE (description, date, emailUser, idTicket) VALUES(?,?,?,?)`;
  const now = new Date();
  db.run(sql, [description, now.toISOString().slice(0, 19).replace('T', ' '),emailUser, idTicket], (err) => {
    if (err) console.log("Error insert message -> "+err.message);
  })
  //if(emailUser == 'sav48ynov@outlook.com') mailServices.sendMailWhenAdminSendMessage(emailUser, idTicket,now.toISOString().slice(0, 19).replace('T', ' ')) 
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