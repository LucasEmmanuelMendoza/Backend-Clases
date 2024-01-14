//FS CON CALLBACKS:
//Lo mismo pero distinta forma:
const fs = require('fs')

//Leer
fs.readFile('./test.json', 'utf-8', (err) => {
    if(err){
        console.log('Error en la lectura')
    }else{
        console.log("Productos: ", data)
    }
})

fs.writeFile('./test2.json', "Nuevo contenido", 'utf-8', (err) => {
    if(err){
        console.log('Error al crear archivo')
    }else{
        console.log("Archivo creado!!")
    } 
})