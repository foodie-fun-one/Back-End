// package imports
const express = require("express");
const helmet = require("helmet");

// creating express server
const server = express();

// importing routers here
const userRouter = require("./routers/user-router");
const cuisineRouter = require("./routers/cuisine_values-router");
const cuisineTypeRouter = require("./routers/cuisine_type-router");


// server routing

server.use("/api/", userRouter);
server.use("/api/cuisine/", cuisineRouter);
server.use("/api/cuisinetype/", cuisineTypeRouter);

// importing middleware here
server.use(helmet(), express.json());


server.get("/", (req, res) => {
  res.send(`Server is LIVE and working.`);
});

module.exports = server;
