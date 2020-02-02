const userModel = require('../../../api/users/users-model');
const bc = require('bcryptjs');

function validate (req, res, next) {
    let { username, password } = req.body;

    if (username && password) {
        userModel.findByUsername(username)
        .then(user => {
            if (user && bc.compareSync(password, user.password)) {

                let { id, ...objNoId } = user;
                req.body = objNoId;
                req.req_id = id;
                next();

            } else {
                res.status(401).json({
                    errorMessage: `Incorrect Username or Password`
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: `There was an error.`
            })
        })
    } else {
        res.status(400).json({
            errorMessage: `Please provide a username and password.`
        })
    }
}

module.exports = validate;