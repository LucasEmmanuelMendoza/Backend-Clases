const express = require('express')
const {Router} = express
const {createHash, isValidPassword} = require('../utils/bcrypts')
const passport = require('../passport/passport')

const router = new Router()
const users = []

router.post('/register', passport.authenticate('register', {failureRedirect: '/user/failedRegister'}), (req, res) =>{
    res.send('User registered')
})

router.get('/failedRegister', (req, res) => {
    res.send('Failed user register')
})

/* router.post('/register', (req, res) => {
    let newUser = req.body
    newUser.id = Math.random()
    newUser.password = createHash(newUser.password)
    users.push(newUser)
    res.send("User guardado correctamente")
}) */

router.post('/login', (req, res) => {
    let userNew = req.body
    //comparo que el usuario existe:
    let userFound = users.find(u => {
        return u.email == userNew.email
    })
    if(userFound){
        //si existe el email, verifico la contraseña. Uso isvalidatepassword
        if (!isValidPassword(userFound, userNew.password)){
            res.send('Contraseña incorrecta')
        }else{
            res.send('Usuario logueado correctamente')
        }    
    }
    res.send('Usuario no encontrado')
})

router.get('/allusers', (req,res) => {
    res.send(users)
    //pero la contraseña se muestra tal cual es, tengo que encriptarla
    //Usando createHash, ahora la contra se muestar encriptada
})

module.exports = router