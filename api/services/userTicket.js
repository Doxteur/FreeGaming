// Importation connection
const db = require("../db/db");
// Importation Mail services
const mailServices = require('../services/mail');

exports.addUserTicket = async (emailUser, idTicket, date) => {
  //Ajout de la liaison dans la BDD
  sql = `INSERT INTO USER_TICKET (emailUser, idTicket) VALUES(?,?)`;
  db.run(sql, [emailUser, idTicket], (err) => {
    if (err) console.log("Error insert user ticket -> "+err.message);
  })
  
  //mailServices.sendMail(emailUser, idTicket, date);
  return 'Liaison faite !';
}
