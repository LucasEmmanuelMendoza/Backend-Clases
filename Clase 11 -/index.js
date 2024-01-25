const express = require('express')
const handlebars = require('express-handlebars')
const homeRouter = require('./routes/home.router')
const http = require('http')
const app = express()
const PORT = 8080 || process.env.PORT
const {Server} = require('socket.io')
//SERVER HTTP
const server = http.createServer(app)
//aunque creemos un sever con http, le pasamos app como argumento porque queremos toda la funcionalidad de express

//PUBLIC
app.use(express.static(__dirname+"/public"))

//engine
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname+'/views')

//rotues express
app.use('/home', homeRouter)

//socket server
const io = new Server(server)
//on: escucho
/*connection: algún cliente se conectó => envío un callback  */
const arrMessage = []

io.on('connection', (socket) => {
    console.log('Hola nuevo cliente')
    socket.emit('wellcome', "Bienvenido cliente nuevo")

    socket.on('new-message', (data) => {
        //data: lo que trae el new-message
        arrMessage.push(data)
        socket.emit('message-all', arrMessage)
    })
})

app.listen(PORT, () => {
    console.log("Server ru on port ", PORT)
})