// Importation connection
const db = require("../db/db");
// Userservices
const userServices = require("../services/user");
// Messageservices
const messageServices = require("../services/message");
// Userticketservices
const UserticketServices = require("../services/userTicket");
// Génère un identifiant
const uuid = require("uuid");

exports.addTicket = async (name, lastname, email, title, description) => {
  const ticketId = uuid.v4();

  //Ajout du ticket dans la BDD
  sql = `INSERT INTO TICKET (id,title, date) VALUES(?,?,?)`;
  const now = new Date();
  db.run(sql, [ticketId,now.toISOString().slice(0, 19).replace('T', ' '), title], (err) => {
    if (err) console.log("Error insert ticket -> "+err.message);
  })

  //AJOUT DE L'UTILISATEUR
  userServices.addUser(name, lastname, email, "CLIENT");
  //AJOUT DU MESSAGE CHANGER USER ID;
  messageServices.addMessage(description,email,ticketId);
  //LIER USER_TICKET
  UserticketServices.addUserTicket(email,ticketId, now.toISOString().slice(0, 19).replace('T', ' à '));
  
  return 'Ticket créé : '+ ticketId ;
}
