const express = require('express')

const {Router} = express //así tomo algún elemento de express, desestructurándolo

const router = new Router() //instancio el router/constructor

const users = [
    {
        name:'Lucas',
        lastName:'Rojas',
        age:'27',
        email:'sape@uwu.com',
        phone:'1543242222'
    },
    {
        name:'Carlos',
        lastName:'González',
        age:'19',
        email:'owo@uwu.com',
        phone:'1543245922'
    },
    {
        name:'Jorge',
        lastName:'Domínguez',
        age:'29',
        email:'aaa@uwu.com',
        phone:'1543332222'
    }
    
]

//ahora voy a tener los métodos http que veníamos trabajando
router.get('/home', (req, res) => {
    //res.send('Hola, estás en el home')
    res.render("home", {
        nombre: "Lucas",
    })//quiero enviar un archivo handlebar así que no uso send, uso render
})      

//renderizar un usuario al azar:
//Voy a la vista de home y pongo lo que quiero mostrar
//Link: http://localhost:8080/users/userDetails, cada vez que recargo, se muestra
//un user distinto
router.get('/userDetails', (req, res) => {
   /*  res.render("home", {
        nombre: "Lucas",
        lastName: "Mendoza",
        age: 25,
        phone: 121323123 */
        res.render("home",
         users[Math.floor(Math.random() * users.length)])
    /* }) */
})

//Para que funcione: que user sea un array de objetos con name y lastName
//users es un array, ojo
router.get('/allusers', (req, res) => {
    res.render("allusers", {
        //name: string / users: array
        /* */
        isAdmin: true,
        name: 'Maria',
        users: users 
    })
})
//PARA PROBAR FIJARME QUE PRIMERO SEA /users PORQUE ESE ES EL PREFIJO QUE YO ASIGNÉ EN INDEX.JS
//exporto el router con todas las rutas que creo en el archivo
//lo importo en el index a través del require
module.exports = router