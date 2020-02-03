const userModel = require('../models/user-model');
const bc = require('bcryptjs');

function validateLogin (req, res, next) {
    let { username, password } = req.body;
  
    if (username && password) {
        userModel.findByUsername(username)
        .then(user => {
            console.log(user)
            if (user && bc.compareSync(password, user.password)) {
                
                let {id, ...objNoId} = user ;
                req.body = objNoId;
                req.req_id = id;
                next();
            }
            else {
                res.status(401).json({ message: 'You shall not pass!!!' })
            }
        })
        .catch(error => {
            console.log(error.message)
            res.status(500).json({ message: 'Ran into unexpected error'})
        })
    } else {
        res.status(400).json({ message: 'Please provide credentials'})
    }
  }

module.exports = validateLogin;