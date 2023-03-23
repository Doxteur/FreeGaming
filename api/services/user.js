// Importation connection
const db = require("../db/db");

exports.addUser = async (name, lastname, email, role) => {
  //VERIFICATION SI EXISTE DEJA :
  if(checkUserWithEmail(email)) return;
  //Ajout de l'user dans la BDD
  sql = `INSERT INTO USER (name, lastname, email, role) VALUES(?,?,?,?)`;
  db.run(sql, [name,lastname, email, role], (err) => {
    if (err) console.log("Error insert user -> "+err.message);
  })
  return 'User created !';
}

async function checkUserWithEmail(email){
  db.all(`SELECT * FROM USER  WHERE email = '${email}'`, (err, rows) => {
    if (err) reject(err);
    if (rows.length != 0) {
      return true;
    }
  })

}