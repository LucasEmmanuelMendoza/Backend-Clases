const express = require('express')
const { initializePassport } = require('../config/passport')
const passport = require('passport')
const {Router} = express
const router = new Router()
const {authorization} = require('../config/passport.js')

router.post('/login', (req, res) => {
    if(req.body.username == 'nombre@gmail.com' && req.body.password == 'password123'){
        //No creo session, creo token con jwt
        let token = jwt.sign(
            {email:req.body.username, password:req.body.password, role: 'admin'},
            'coderSecret',
            {expiresIn: '24h'}
        )

        res.cookie('cookieToken', token).send({message: 'User logged'})
        res.send({message: 'User logged', token})
        console.log(token)
    }
})

//{session:false} deshabilito session para usar jwt
router.get('/home', passport.authenticate('jwt', {session:false}), authorization, (req,res)=>{
    res.send(req.user)
    //cuando haga un get se va a validar el jwt y además si tengo permisos
})

router.get('/logout', (req, res) => {
    req.clearCookie('cookieToken').send('Cookie eliminada')
})

module.exports = router