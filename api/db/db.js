const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("./database/free.db", (err) => {
    if (err) throw err;
    console.log('Database start');
})

ticket = `CREATE TABLE IF NOT EXISTS TICKET (id TEXT,title TEXT, email TEXT, status TEXT,date TEXT)`;
db.run(ticket);

user = `CREATE TABLE IF NOT EXISTS USER (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, lastname TEXT,email TEXT UNIQUE, role TEXT)`;
db.run(user);

message = `CREATE TABLE IF NOT EXISTS MESSAGE (id INTEGER PRIMARY KEY AUTOINCREMENT,description TEXT, date TEXT, emailUser TEXT, idTicket TEXT)`;
db.run(message);

user_ticket = `CREATE TABLE IF NOT EXISTS USER_TICKET (emailUser TEXT,idTicket TEXT)`;
db.run(user_ticket);

module.exports = db;
