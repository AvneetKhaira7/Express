// My server will live here - Cthulhu!

// create a reference to the connect module and store a pointer
// to the connect module in the connect variable
let express = require('express');

// create an instance of the connect server
let app = express();

// represents the port address
const port = 3000;

// listen for requests on a specific port
app.listen(port);
console.log(`Server listening at http://localhost/${port}`);

// ROUTING - Mount different routes

// Route for 'hello'
app.use('/hello', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello, World!");
    next();
});

// Default Route for the website '/'
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!");
    next();
});