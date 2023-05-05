const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')

const app = express()
const PORT = process.env.PORT

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes
const authRoute = require('./routes/auth')

app.use('/auth', authRoute)

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: 'Made with love by Alvriyanto Azis',
        data: null
    })
})


// Start listen 
app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})