// Importation connection
const db = require("../db/db");

exports.addMessage = async (description, emailUser, idTicket) => {
  //Ajout du message dans la BDD
  sql = `INSERT INTO MESSAGE (description, date, emailUser, idTicket) VALUES(?,?,?,?)`;
  const now = new Date();
  db.run(sql, [description, now.toISOString().slice(0, 19).replace('T', ' '),emailUser, idTicket], (err) => {
    if (err) console.log("Error insert message -> "+err.message);
  })
  
  return 'Message created !';
}

exports.messagesWithTicketId = async (name) => {
  const data = [];
  new Promise((resolve, reject) => {
    db.all('SELECT * FROM MESSAGE WHERE ticketId ='+name, (err, rows) => {
      if (err) reject(err);
      rows.forEach((row) => {
        data.push(row);
      });
      resolve();
    });
  }).then(() => {
    res.json({
      Ticket: data,
    });
  }).catch(err => console.error(err));
}