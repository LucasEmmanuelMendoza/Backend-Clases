/*Router en Express
Problema: Al ver que había muchas rutas iguales, que sólo diferían en métodos,
nos dimos cuenta de que el código podría tornarse bastante engorroso
En la clase anterior, mostramos un ejemplo con 'usuarios', pero
¿qué pasaría si tuvieramos..?
Usuarios, Productos, Tickets, Eventos, Membresías, Transportes, etc
¿Cuántos métodos atiborrados tendríamos en un sólo archivo?
Un ROUTER EN EXPRESS nos permitirá separar los endpoints 'comunes' en
entidades separadas que fungirán como 'mini aplicaciones', las cuales
tomarán peticiones que concuerden con dicho endpoint y así redireccionarse
a esta mini aplicación. De esta manera, nuestro código resultará más 
organizado, y las diferentes entidades tendrán aislado el comportamiento
interno, como configuraciones, middlewares, etc. */

//Definimos una carpeta ROUTES que va a tener todas las rutas
/*Puedo hacer products.js o products.routes.js */

import { express } from "express";
import routerProd from "../routes/products.routes";

const PORT = 4040
const app = express()

//middlewares
app.use(express.json())//permitir enviar y recibir archivos JSON
app.use(express.urlencoded({extended: true}))//permitir extensiones en la url

//defino las rutas de mi aplicación:
//como voy a trabajar con un CRUD, se suele agregar '/api'
//endpoint: mismo para cada ruta

//así, TODAS las rutas van a ser '/api/products' y desp se va a concatenar
//con cada ruta que definí de products.routes.js para no copiar 20 veces la misma
//ruta

//Todas las rutas de mi app van a ser dos líneas en el index. Una de importación
//y otra para implementarla

app.use('/api/products', routerProd)

app.listen(PORT, ()=>{
    console.log('Server on point', PORT)
})


//========2° parte de la clase ==========
/*¿Qué es un middleware?
Cada vez que utilizamos un app.use estamos utilizando un middleware. Éstas son 
operaciones que se ejecutan de manera intermedia entre la petición del cliente, y el servicio de 
nuestro servidor.

Como lo indica el nombre, middleware hace referencia a un intermediario, siempre
se ejecuta antes de llegar al endpoint que corresponde.

Podemos utilizar un middleware para:
-Dar info sobre las consultas que se están haciendo(logs)
-Autorizar o rechazar usuarios antes de que lleguen al endpoint(seguridad)
-Agregar o alterar info al método req antes de que llegue al endpoint(formato)
-Redireccionar según sea necesario(router)
-En ciertos casos, finalizar la petición sin que llegue al endpoint(seguridad)

Vamos a transformar datos para enviar desde postman a mi app

Error de cors: Medida de seguridad. Si el que está consultando va a tener acceso
o no a mi app
-Seguridad

Vamos a usar el middleware de json para que mis rutas puedan mandar y recibir jsons:

app.use(express.json())
app.use(express.urlencoded({extended: true}))

VER TODOS LOS TIPOS DE MIDDLEWARE DE LAS DIAPOSITIVAS
middleware incorporados: para subir imagenes
mimddleware de terceros: subir imgs a una carpeta pública.

Un middleware es un intermediario entre una petición y mi aplicación
*/

VER VIDEO 1:36:33