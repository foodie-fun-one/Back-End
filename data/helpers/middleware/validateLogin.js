const userModel = require('../models/user-model');
const bc = require('bcryptjs');

function validateLogin (req, res, next) {
    let { username, password, email } = req.body; // looking at the request.body for these and taking them out

    if (username && password) {
        userModel.findByUsername(username)
        .then(user => {
            console.log(user)
            if (user && bc.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({
                    errorMessage: `Not Authorized`
                })
            }
        })
        .catch(error => {
            console.log(error.message)
            res.status(500).json({
                serverMessage: `There was an error within the server.`
            })
        })
    } else {
        res.status(400).json({
            errorMessage: `Please provide a username and password.`
        })
    }
}

module.exports = validateLogin;