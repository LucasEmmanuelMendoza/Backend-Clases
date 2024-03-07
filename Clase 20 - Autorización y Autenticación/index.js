/* Métodos de autenticación*
const bcrypt = require('bcrypt')/

let password = bcrypt.hashSync('12345', bcrypt.genSaltSync(10))
console.log(password)
//esto devuelve "$2b$10$p94DwnBGHi/hiCfxNaKUl.sMr7Ok/Ob7DuVe0T2XYwHrH8vCiMyJ2" y esa es la forma en que tenemos que guardar la contraseña en una base de datos para que nadie pueda verla, ni siquiera yo

/*Pero a la hora de comparar, 12345 es distinto a $2b$10$p94DwnBGHi/hiCfxNaKUl.sMr7Ok/Ob7DuVe0T2XYwHrH8vCiMyJ2 
Usamos compareSync:

let compare = bcrypt.compareSync('12345', '$2b$10$p94DwnBGHi/hiCfxNaKUl.sMr7Ok/Ob7DuVe0T2XYwHrH8vCiMyJ2')
console.log(compare)//true */

const express = require('express')
const session = require('express-session')
const app = express()
const userRouter = require('./routes/index')
const db = require('./db/index')
const initializePassport = require('./passport/passport')
const passport = require('passport')
const MongoStore = require('connect-mongo')

app.use(express.json())

app.use(session({
    store: MongoStore.create({
        mongoUrl:"uwu"
    }),
    secret: 'secretCoder',
    resave: true,
    saveUninitialized: true
}))

initializePassport()
app.use(passport.initialize())
app.use(passport.session())

app.use('/user', userRouter)

app.listen(8080, () => {
    console.log('Server OK')
    db.connect()
})