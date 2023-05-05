const jwt = require('jsonwebtoken')
require('dotenv/config')

const verifyToken = (req, res, next) => {
    const bearerHeader = req.header('authorization')

    if (!bearerHeader) {
        return res.status(400).json({
            status: false,
            message: 'Access denied',
            data: null
        })
    }

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    try {
        const verified = jwt.verify(bearerToken, process.env.JWT_SECRET_KEY)
        req.user = verified
        next()
    } catch {
        res.status(400).json({
            status: false,
            message: 'Your sessions token is invalid',
            data: null
        })
    }
}

module.exports = verifyToken