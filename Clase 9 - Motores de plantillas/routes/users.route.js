const express = require('express')

const {Router} = express //así tomo algún elemento de express, desestructurándolo

const router = new Router() //instancio el router/constructor

//ahora voy a tener los métodos http que veníamos trabajando
router.get('/home', (req, res) => {
    //res.send('Hola, estás en el home')
    res.render("home", {
        nombre: "Lucas",
    })//quiero enviar un archivo handlebar así que no uso send, uso render
})      

router.get('/userDetails', (req, res) => {
   /*  res.render("home", {
        nombre: "Lucas",
        lastName: "Mendoza",
        age: 25,
        phone: 121323123 */
        res.render("home", users[Math.floor(Math.random() * users.length)])
    /* }) */
})

const users = ["Lucas", "Juan", "Maria", "Agustín", "Carla"]
//Para que funcione: que user sea un array de objetos con name y lastName
//users es un array, ojo
router.get('/allusers', (req, res) => {
    res.render("allusers", {
        isAdmin: true,
        name: 'Maria',
        lastName: 'Sape',
        users: users
    })
})
//PARA PROBAR FIJARME QUE PRIMERO SEA /users PORQUE ESE ES EL PREFIJO QUE YO ASIGNÉ EN INDEX.JS
//exporto el router con todas las rutas que creo en el archivo
//lo importo en el index a través del require
module.exports = router