// package imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// creating express server
const server = express();

// importing routers here
const userRouter = require('../api/users/users-router');

// server routing

server.use('/api/', userRouter);


// importing middleware here
server.use(helmet(), cors(), express.json());

// middleware server.use here

server.get('/', (req, res) => {
    res.send(`Server is LIVE and working.`)
});

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
server.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

module.exports = server;

