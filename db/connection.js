const mysql = require('mysql2');

// COnnect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mysql username,
        user: 'root',
        // your mysql password,
        password: 'mysqlrocks99!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;