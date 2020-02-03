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
    const credentials = req.body;
    const hash = bc.hashSync(credentials.password, 14);
    credentials.password = hash; // hashing the password

    userModel.add(credentials)
    .then(user => {
        const token = generateToken(req.body)
        res.status(201).json({
            welcomeMessage: `Welcome ${user.username}. Your ID is ${user.id}`, token
        })
    })
    .catch(error => {
        res.status(500).json({
            serverMessage: `There was an error with the server. ${error}`
        })
    });
});



module.exports = router;