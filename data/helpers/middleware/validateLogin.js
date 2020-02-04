const userModel = require('../models/user-model');
const bc = require('bcryptjs');

function validateLogin (req, res, next) {
    let { username, password } = req.body;
  
    if (username && password) {
        userModel.findByUsername(username)
        .then(user => {
            if (user && bc.compareSync(password, user.password)) {
                
                let {id, ...objNoId} = user ;
                req.body = objNoId;
                req.req_id = id;
                next();
            }
            else {
                res.status(401).json({ errorMessage: 'There is no account with given credentials.' })
            }
        })
        .catch(error => {
            console.log(error.message)
            res.status(500).json({ serverMessage: 'There has been a server problem.'})
        })
    } else {
        res.status(400).json({ errorMessage: 'Please provide a username and password!'})
    }
  }

module.exports = validateLogin;