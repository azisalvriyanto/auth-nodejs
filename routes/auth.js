const express = require('express')
const router = express.Router()
const {
    login,
    register,
} = require('../controllers/auth')

// Routes
router.post('/signup', register)
router.post('/login', login)

module.exports = router