const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        const secret = process.env.JWT_SECRET || 'f7[StHn%,jJjXAm-';

        jwt.verify(authorization, secret, function(err, decodedToken) {
            if (err) {
                res.status(401).json({
                    errorMessage: `Invalid Token`
                })
            } else {
                req.token = decodedToken;

                next();
            }
        })
    } else {
        res.status(400).json({
            errorMessage: `Please login and try again.`
        })
    }
}