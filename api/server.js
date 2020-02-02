// imports

const express = require('express');
const helmet = require('helmet');
const cors = require('cros');

// creating express server
const server = express();

// importing routers here

// importing middleware here
server.use(helmet(), cors(), express.json());

// middleware server.use here

server.get('/', (req, res) => {
    res.send(`WE ARE UP AND RUNNING!!`)
});

module.exports = server;