const express = require('express');
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../../data/helpers/models/user-model');
const validateLogin = require('../../data/helpers/middleware/validateLogin');
const validateRegister = require('../../data/helpers/middleware/validateRegister');
const generateToken = require('../../data/helpers/middleware/generateToken');
const verifyToken = require('../../data/helpers/middleware/verifyToken');
const router = express.Router();
router.use(express.json());

// register a new user

router.post('/register', (req, res) => {
    // implement registration
    let user = req.body;
    // validate the data before sending it to the database!
    const validateResult = validateRegister(user);
  
    if (validateResult.isSuccessfull === true) {
      const hash = bc.hashSync(user.password, 12);
      user.password = hash;
  
      userModel.add(user) 
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error)
      })
  
    } else {
      res.status(400).json({
        errorMessage: `There has been an error registering this user. `,
        errors: validateResult.errors
      })
    }
  });

// login

router.post("/login", (req, res) => {
    let { username, password } = req.body;
  
    userModel.findByUsername({ username })
      .first()
      .then(user => {
        if (user && bc.compareSync(password, user.password)) {
          const token = generateToken(user);
  
          res.status(200).json({
            message: `Welcome ${user.username}! You are now logged in.`,
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;