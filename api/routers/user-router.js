const express = require("express");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../../data/helpers/models/user-model");
const validateLogin = require("../../data/helpers/middleware/validateLogin");
const validateRegister = require("../../data/helpers/middleware/validateRegister");
const generateToken = require("../../data/helpers/middleware/generateToken");
const verifyToken = require("../../data/helpers/middleware/verifyToken");
const Logout = require('../../data/helpers/middleware/logout');
const router = express.Router();
router.use(express.json());

// register a new user

router.post("/register", (req, res) => {
  // implement registration
  let user = req.body;
  // validate the data before sending it to the database!
  const validateResult = validateRegister(user);

  if (validateResult.isSuccessfull === true) {
    const hash = bc.hashSync(user.password, 12);
    user.password = hash;

    userModel
      .add(user)
      .then(saved => {
        res.status(201).json("Account has been created.");
      })
      .catch(error => {
        res.status(400).json(error.response);
      });
  } else {
    res.status(400).json({
      errorMessage: `There has been an error registering this user. `,
      errors: validateResult.errors
    });
  }
});

// login to user

router.post("/login", validateLogin, (req, res) => {
  const token = generateToken(req.body);
  res.status(200).json({
    welcomeMessage: `Logged in as (${req.req_id}) ${req.body.username}.`,
    token: token
  });
});


// get all users

router.get("/users", verifyToken, (req, res) => {
  userModel
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        serverMessage: `There has been a server error.`
      });
    });
});

// get users by id

router.get("/users/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  userModel
    .findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          errorMessage: `Could not find specified user.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        serverMessage: `There has been a server error.`
      });
    });
});

// update a user

router.put("/users/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  userModel
    .findById(id)
    .then(user => {
      if (user) {
        userModel.update(changes, id).then(updatedUser => {
          res.status(201).json(updatedUser);
        });
      } else {
        res.status(404).json({
          errorMessage: `Could not find specified user.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        serverMessage: `There has been a server error.`
      });
    });
});

// delete a user

router.delete("/users/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  userModel
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(204).json(deleted);
      } else {
        res.status(404).json({
          errorMessage: `Could not find specified user.`
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        serverMessage: `There has been a server error.`
      });
    });
});

module.exports = router;
