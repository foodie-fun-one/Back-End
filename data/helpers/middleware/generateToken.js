const secret = 'blob';
const jwt = require('jsonwebtoken');

function generateToken(user) {
    const payload = {
        username: user.username,
        password: user.password,
        ID: user.id
    };

    const options = {
        expiresIn: '8h'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = generateToken;