const express = require('express')
const cookieParser = require('cookie-parser')
const routerAuth = require('./routes/index.js')
const passport = require('passport')
const {initializePassport} = require('./config/passport.js')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
initializePassport()

app.use('/auth', routerAuth)

app.listen(8080, )
