const mysql = require('mysql2');

// connect to mysql database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Raptor10!',
        database: 'election'
    },
    console.log('connected to the election database.')
);

//export the file 
module.exports = db;

