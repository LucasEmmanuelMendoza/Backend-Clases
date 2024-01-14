/* Nodemon index.js 
let name = "Lucas";

console.log(name);*/

//En backend las peticiones se escuchan a través de puertos
/*Primero creamos la "carcasa" del backend y después los puertos*/
/* const http = require('http') */

//req: petición del servidor - res: respuesta
/* const server = http.createServer((req, res) => {
    console.log(req.url);
    //los end son ENDPOINTS: /productos, /cuenta, /home
    if(req.url == '/'){
        res.end("Bienvenidos")
    }
    
    if(req.url == '/rutauno'){
        res.end("Hola soy la ruta 1")
    }
    if(req.url == '/rutados'){
        res.end("Hola soy la ruta 2")
    }
    
    res.end('Hola mundo con http create server')
}); */

//1°arg: nombre del puerto, 2°arg: función que se ejecuta al "escuchar" por el puerto
/* server.listen(8080, ()=>{
    console.log('Server run on port 8080')
})
 */
//en la web: localhost:8080, muestra lo que pusimos en res.end

/*-------------------------------------------------------- */
//instalamos Express: npm install express (esta es la alternativa a http)
const express = require('express')

const app = express();
const PORT = 8080

let products = [
    {
        id: Math.random(),
        title: "Tv",
        price: 2000
    },
    {
        id: Math.random(),
        title: "Radio",
        price: 2044
    },
    {
        id: Math.random(),
        title: "Lavarropas",
        price: 1333
    }
]

const obj = {
    nombre: "lucas",
    apellido: "mendoza",
    edad: 25,
    correo:"mendozalucas001@gmail.com"
}

//recibir peticiones:
app.get('/', (req, res) => {
    res.send('Hola mundo con express')//esto ve el usuario en la web
})

app.get('/bienvenida', (req, res) => {
    res.send('<h1 style="color:blue">Bienvendos</h1>')//esto ve el usuario en la web
})

app.get('/usuario', (req, res) => {
    res.send(obj)//esto ve el usuario en la web
})

//-> /id es un nombre cualquiera. id es un "params"
app.get('/products', (req, res) => {
    /**/ res.send(products)
})
//si quiero mandar solo uno:
app.get('/product/:id', (req, res) => {
    console.log(req.params);//devuelve el id porque :id hace que id sea param
    let idProd = req.params.id
    let prodFound = products.find(product => {
        return product.id
    })
    res.send(prodFound)
})

//query
app.get('productByTitleAndPrice', (req, res) => {
    //cuando no sé cuántos valores voy a recibir uso query
    console.log(req.query)
    let title = req.query.title//lo que sale del link
    let price = req.query.price//lo que sale del link
    let prodFound = products.find(prod => {
        return prod.title == title && prod.price == price
    })
    res.send(prodFound)
})

app.listen(PORT, ()=> {
    console.log('Server run on port', PORT)
})



