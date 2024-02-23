const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const session = require('express-session')

app.use(express.static(__dirname+'/public'))
app.use(cookieParser('codersecret'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))//enviar info por html

function auth(req, res, next){
    if(req.session.user == 'Lucas' && req.session.admin){
        return next()//dejar seguir el curso del programa
    }
    //si no entra al if, no hay sesión
    return res.send('Error en la autenticación, no estás autorizado para esta ruta')
}

app.get('/login', (req, res) => {
    let {username, password} = req.query
    //valido 
    if(username != 'Lucas' || password !== '123asd'){
        return res.send('Usuario o contraseña incorrectos')
    }
    req.session.user = username
    req.session.admin = true
    //si es admin tiene permisos especiales a diferencia de un user común

    res.send('Usuario Logueado!!')
})

//Protección de rutas
app.get('/profile', auth(), (req, res) => {
    res.send('Si estás viendo esto es porque estás logueado. Bienvenido')
})

//iniciar session
//secret: encriptar información
app.use(session({
    secret:'codersecret',
    resave: true,//que siempre esté activa la sesión sin importar la inactividad
    saveUninitialized: true,
}))

//crear sesión
app.get('/setSession', (req, res) => {
    req.session.user = 'userName',
    req.session.admin = true
    
    req.send('Usuario logueado')
})

//obtener una sesión
app.get('/getSession', (req, res) => {
    req.session.user = 'userName',
    req.session.admin = true
    
    req.send(req.session)
})

//eliminar una sessión
app.get('/logout', (req, res) => {
    req.session.destroy((err)=> {
        if(err) res.send('Failed Logout')
        res.send('Logout OK')
    })
}) 

app.get('/setCookie', (req, res) => {
    res.cookie('CoderCookie', {user:'lucasmendoza@gmail.com'}, {maxAge:5000, signed:true}).send('Cookie creada')
})

app.get('/getCookie', (req, res) => {
    res.send(req.cookies)
})

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('CoderCookie').send('Cookie brorada')
})

app.post('/createCookie', (req, res) => {
    console.log(req.body)
    res.cookie('CoderCookie', {user:'req.body.correo'}, {maxAge:10000, signed:true}).send('Cookie creada')
})

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname+'/public/inedx.html')
})

app.listen(8080, () => {
    console.log('Server OK!')
})

//=========================== PARTE 2 - SESSIONS ===========================
/*Cómo sabe el servidor quién soy? Iniciando una sesión en la plataforma / web
El navegador no tiene que tener accesible la data que se guarda en una cookie
Le entregamos info al servidor para que nos recuerde por un tiempo o hasta
que cerremos la sesión.
npm i express-session
*/