const mysql = require('mysql2');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express ();

//Express middleware
app.use (express.urlencoded({ extended: false }));
app.use(express.json());

// connect to mysql database
const db = mysql.createConnection (
    {
        host: 'localhost',
        //your MYSQL username,
        user: 'root',
        // your mysql password
        password: 'Raptor10!',
        database: 'election'
    },
    console.log('connected to the election database.')
);


db.query(`Select * FROM candidates` , (err, rows) => {
    console.log(rows);
});

// Deafault response for any other Requests (not found) catch all 
//make sure this is the last route as it overrides the others 
app.use((req, res) => {
    res.status(404).end();
});



//at bottom 
app.listen(PORT, () => {
    console.log (`Server running on port ${PORT}`);
});