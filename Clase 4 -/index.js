/*setinterval: se ejecuta en loop hasta que lo paramos con clearinterval*/
/*setTimeOut:El método global setTimeout() establece un temporizador que ejecuta 
una función o una pieza de código específica una vez que expira el temporizador  */
/* 
const os = require('os');

console.log(os.cpus()) */

//Guardar info en memoria para no reiniciar, por ejemplo, un array, cada vez que se corre el programa
//File System Node

//Crear:
const fs = require('fs');
//Siempre vamos a escribir texto, string
fs.writeFileSync('./test.txt', 'Contenido del archivo de prueba', {encoding:'utf-8'});
//Si no existe el archivo, se crea y aparece a la izquierda

//Leer archivo:
let readRs = fs.readFileSync('./test.txt', {encoding:'utf-8'})
console.log(readRs);

/* let productos = [
    {title:"tv",
    price:54},
    {title:"tv2",
    price:66}
] */

let productos=[
    {title:"pc",
    price:444}
]

//Creo un json con los productos
fs.writeFileSync('./test2.json', JSON.stringify(productos, null, 2), {encoding:'utf-8'});

let readRes2 = fs.readFileSync('./test2.json', {encoding:'utf-8'});
console.log(readRes2);

//leo json:
let readRes3 = fs.readFileSync('./test.json', {encoding:'utf-8'});
console.log(readRes3);

//leer json y guardarlo como array:

let array = JSON.parse(readRes2);

//edito el array
array.push({
    title:"Lavaddora",
    price:443
})
//vuelvo a cargar el array:

//Agregar texto después del contenido: NO RECOMENDADO
fs.appendFileSync('./test.txt', '\nTexto nuevo :v')
let readRes4 = fs.readFileSync('./test.txt', {encoding:'utf-8'});
console.log(fs.readRes4);

