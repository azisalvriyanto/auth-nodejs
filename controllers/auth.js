const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const model = require("../models")
const User = model.user;

exports.login = async (req, res) => {
    const user = await User.findOne({
        where: {
            username: req.body.username
        }
    })
    if (!user) {
        res.status(400).json({
            status: false,
            message: `User hasn't already beeen registered`,
            data: null
        })
    }

    const passwordValidation = await bcrypt.compare(req.body.password, user.password)
    if (!passwordValidation) {
        res.status(400).json({
            status: false,
            message: `Your password is wrong`,
            data: null
        })
    }

    const token = jwt.sign({
        _id: user._id
    }, process.env.JWT_SECRET_KEY)

    res.header('Authorization', 'Bearer ' + token).json({
        status: true,
        message: null,
        data: {
            token: token,
            user: user
        }
    })
}

exports.register = async (req, res) => {
    // Username exist validation
    const usernameExist = await User.findOne({
        username: req.body.username
    })
    if (usernameExist) {
        res.status(400).json({
            status: false,
            message: 'Username has already registered',
            data: null
        })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPasword = await bcrypt.hash(req.body.password, salt)

    // Create user
    const user = new User({
        fullname: req.body.fullname,
        username: req.body.username,
        password: hashPasword,
    })

    try {
        const savedUser = await user.save()
        res.json({
            status: true,
            message: 'User registered successfully',
            data: savedUser
        })
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err,
            data: null
        })
    }
}