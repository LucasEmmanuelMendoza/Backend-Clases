const express = require('express')
const routerUsers = require('./routes/users.route')
const handlebars = require('express-handlebars')

const app = express()
const PORT = 8080

//CARPETA ESTÁTICA
app.use(express.static(__dirname+'/public'))

//MOTOR DE PLANTILLA
/*1*/app.engine('handlebars', handlebars.engine())//inicializa handlebars dentro de mi app
/* app.set('views', './views) si hago esto puede no servir porque puede que cambie la ruta
relativa de esa carpeta, así que lo hago con la ruta relativa, no ABSOLUTA: usando __dirname 
O también: 
app.set('views', __dirname+'/views') acá estoy diciendo "dentro de la carpeta(__dirname),
hay una carpeta que se llama "views""
*/
/*2*/app.set('views', __dirname+'/views')
/*3*/app.set('view engine', 'handlebars')
//fin motor de plantilla

//Routes o Endpoints

app.use('/users', routerUsers)

/*app.use('/users', routerUsers) ahora, para usar algo de routerUsers,
SIEMPRE voy a tener que usar /users antes, ese es el prefijo*/


app.listen(PORT, () => {
    console.log('Server ok on port', PORT)
})