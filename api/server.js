// package imports
const express = require("express");
const helmet = require("helmet");

// creating express server
const server = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
};

server.use(cors(corsOptions));


// importing routers here
const userRouter = require("./routers/user-router");
const restRouter = require('./routers/restaurant-router.js');
const cuisineRouter = require("./routers/cuisine_values-router");
const cuisineTypeRouter = require("./routers/cuisine_type-router");
const reviewRouter = require('./routers/review-router.js');


// server routing

server.use("/api/", userRouter);
server.use('/api/restaurants', restRouter);
server.use('/api/reviews', reviewRouter);
server.use("/api/cuisine/", cuisineRouter);
server.use("/api/cuisinetype/", cuisineTypeRouter);

// importing middleware here
server.use(helmet(), express.json());


server.get("/", (req, res) => {
  res.send(`Server is LIVE and working.`);
});

module.exports = server;

