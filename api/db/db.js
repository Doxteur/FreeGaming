const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("./database/free.db", (err) => {
    if (err) throw err;
    console.log('Database start');
})

sql = `CREATE TABLE IF NOT EXISTS TICKETS (id TEXT,name TEXT, lastname TEXT,email TEXT, date TEXT)`;
db.run(sql);

module.exports = db;
