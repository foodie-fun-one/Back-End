const secret = 'blob';
const jwt = require('jsonwebtoken');

function generateToken(user) {
    const payload = {
        username: user.username,
        email: user.email,
        password: user.password,
    };

    const options = {
        expiresIn: '10h'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = generateToken;