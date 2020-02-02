// imports

const express = require('express');
const helmet = require('helmet');
const cors = require('cros');

// creating express server
const server = express();

// importing routers here

// importing middleware here

// middleware server.use here

server.get('/', (req, res) => {
    res.send(<h1>SERVER IS LIVE</h1>)
})

module.exports = server;