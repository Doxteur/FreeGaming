// Importation connection
const db = require("../db/db");

exports.allUsers = async (req, res) => {
  const data = [];
  new Promise((resolve, reject) => {
    db.all('SELECT * FROM USER', (err, rows) => {
      if (err) reject(err);
      rows.forEach((row) => {
        data.push(row);
      });
      resolve();
    });
  }).then(() => {
    res.json({
      Users: data,
    });
  }).catch(err => console.error(err));
};