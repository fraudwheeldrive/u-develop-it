const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express ();

//Express middleware
app.use (express.urlencoded({ extended: false }));
app.use(express.json());

// get route 
app.get ('/' , (req, res) => {
    res.json({
        message: ' Hello World'
    });
});

// Deafault response for any other Requests (not found)
//make sure this is the last route as it overrides the others 
app.use((req, res) => {
    res.status(404).end();
});



//at bottom 
app.listen(PORT, () => {
    console.log (`Server running on port ${PORT}`);
});