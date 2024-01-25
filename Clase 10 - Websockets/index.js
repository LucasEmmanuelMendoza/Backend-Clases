const express = require('express')
const handlebars = require('express-handlebars')
const routerHome = require('./routes/index')
const http = require('http')
const app = express()
const PORT = 8080
const server = http.createServer()

//PUBLIC
app.use(express.static(__dirname+'/public'))

//Motor de plantilla
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars') //para que las extensiones handlebars sean reconocidas
app.set('views', __dirname+"/views")

//ROUTES
app.use('/api', routerHome)

//SOCKET
const io = new Server(server)
//io. para recibir, mandar mensaje, notificaciones etc
//lo prendemos:
io.on()('connection', (socket) => {
    console.log('User conectado')
    socket.emit('mensaje', 'Hola cliente, bienvenido')

    socket.on('mensaje2', (data)=>{
        console.log(data)
    })

    socket.on('messajenuevo', (data)=>{
        console.log(data)
    })
})

app.listen(PORT, ()=> {
    console.log('Server running on port', PORT)
})
