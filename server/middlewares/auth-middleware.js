class AuthMiddleware {
    isAuth(req, res, next) {
        if (req.session.user === undefined)
            return res.status(404).send({message: 'You must be logged in'})
        return next()
    }
}

module.exports = new AuthMiddleware()