const express = require("express");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("./users-model");
const validate = require("../../data/helpers/middleware/validate");
const generateToken = require("../../data/helpers/middleware/generateToken");
const verifyToken = require("../../data/helpers/middleware/verifyToken");

const router = express.Router();

router.use(express.json());

// GET ALL USERS / MUST VERIFY TOKEN

router.get("/users", verifyToken, (req, res) => {
  userModel
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        serverError: `There was an error.`
      });
    });
});

// GET USERS BY ID

router.get("/user/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  userModel
    .findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          errorMessage: `Could not find user with given ID.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        serverError: `There was an error.`
      });
    });
});

// CREATE A NEW USER

router.post("/user/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;
  
    userModel.add(user)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;