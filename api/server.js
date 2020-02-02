// package imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// creating express server
const server = express();

// importing routers here
const userRouter = require('./users/users-router');

// server routing

server.use('/api/', userRouter);


// importing middleware here
server.use(helmet(), cors(), express.json());

// middleware server.use here

server.get('/welcome', (req, res) => {
    res.send(`Server is LIVE and working.`)
});

module.exports = server;

