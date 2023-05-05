const express = require('express')
const router = express.Router()
const {
    getUserlist
} = require('../controllers/user')
const verifyToken = require('../services/verifyToken')

// Routes
router.get('/userlist', verifyToken, getUserlist)

module.exports = router