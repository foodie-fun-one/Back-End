const jwt = require('jsonwebtoken');
const secret = 'blob';

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
  
    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ errorMessage: `Invalid credentials.`})
  
            } else {
                req.username = decodedToken.username
                req.user_id = decodedToken.id
                next();
            }
        });
    } else {
        res.status(400).json({ errorMessage: `Token was not provided.`})
    }
  }

module.exports = verifyToken;