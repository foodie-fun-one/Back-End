module.exports = (req, res, next) => {

    const authenticationError = {
        message: `Incorrect Username and Password.`
    }

    if (!req.session && !req.session.username) {
        console.log(req.session, req.session.username)
        res.status(401).json(authenticationError)
    } else {
        next()
    }

}