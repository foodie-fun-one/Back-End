// package imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// creating express server
const server = express();


// importing routers here
const userRouter = require('./routers/user-router');
const cuisineRouter = require('./routers/cuisine_values-router');
const cuisineTypeRouter = require('./routers/cuisine_type-router');

// server routing

server.use('/api/', userRouter);
server.use('/api/cuisine/', cuisineRouter);
server.use('/api/cuisinetype/', cuisineTypeRouter)

// importing middleware here
server.use(helmet(), express.json());

server.use(cors({
    origin: 'http://localhost',
    allowedHeaders: ["Content-Type", "Authorization"]
}));

server.options('*', cors())

server.all('', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

server.get('/', (req, res) => {
    res.send(`Server is LIVE and working.`)
});

module.exports = server;

