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

// ** commented out for now ** 
//db.query(`Select * FROM candidates` , (err, rows) => {
//    console.log(rows);
//});

//GET a single candidate ** commented out for now 
//db.query (`SELECT * FROM candidates WHERE id =8` , (err, row) => {
//   if (err) {
//       console.log(err);
//    }
//    console.log(row);
//});

//DELETE a candidate * commented out for now 
//db.query(`DELETE FROM candidates WHERE id = ?` , 1, (err, result) => {
//    if (err) {
//        console.log(err);
//    }
//    console.log(result);
//});

// create a candidate 
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
             VALUES (?,?,?,?)`;
const params = [1, 'Ronald' , 'Firbank' , 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Deafault response for any other Requests (not found) catch all 
//make sure this is the last route as it overrides the others 
app.use((req, res) => {
    res.status(404).end();
});



//at bottom 
app.listen(PORT, () => {
    console.log (`Server running on port ${PORT}`);
});