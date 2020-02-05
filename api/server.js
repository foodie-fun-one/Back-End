// package imports
const express = require("express");
const helmet = require("helmet");

// creating express server
const server = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
};

server.use(cors(corsOptions));


server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// importing routers here
const userRouter = require("./routers/user-router");
const restRouter = require('./routers/restaurant-router.js');
const cuisineRouter = require("./routers/cuisine_values-router");
const cuisineTypeRouter = require("./routers/cuisine_type-router");


// server routing

server.use("/api/", userRouter);
server.use('/api/restaurants', restRouter);
server.use("/api/cuisine/", cuisineRouter);
server.use("/api/cuisinetype/", cuisineTypeRouter);

// importing middleware here
server.use(helmet(), express.json());


server.get("/", (req, res) => {
  res.send(`Server is LIVE and working.`);
});

module.exports = server;

