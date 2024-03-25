const express = require('express1')
const{Router} = express
const router = new Router()


//Múltiples validaciones para un param
/*router.param('word', (req, res, next, valor del parámetro) => {
    req.word = "Soy la palabra " + word
    next()
}) */

router.param('word', (req, res, next, word) => {
    req.word = "Soy la palabra " + word
    next()
})

router.get('/test/:word', (req, res) => {
    res.send('Palabra', + JSON.stringify(req.params))
})

//quiero validar para que, por ejemplo, en word no vayan numeros, ñ, arroba, etc
//Parámetro

router.get('/test/:word'([a-zA-Z]), (req, res) => {
    res.send('Palabra', + JSON.stringify(req.params))
    //no acepta números
})

router.get('/test/:word([a-zA-Z])', (req, res) => {
    res.send('Palabra', + JSON.stringify(req.params))
    //no acepta números
})

router.get('/test/home', (req, res) => {
    res.send('Hola, soy home')
})

//MANEJADOR DE RUTAS QUE NO EXISTEN

router.get('*', (req, res) => {
    res.status(404).send('La ruta no existe')
})

module.exports = router
