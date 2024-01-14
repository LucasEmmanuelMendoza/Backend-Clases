//Tipo de dato primitivo: Copia por valor
let nombre = 'Lucas'
let nombre2 = nombre

console.log(nombre2)

nombre2 = 'Mucas'

console.log(nombre)



//Tipo de dato Compuestos: Objeto (Copia por referencia)
let obj1 = {
    nombre:'Camilo',
    edad: 25
}

let obj2 = obj1

console.log(obj1)

obj2.pais = "Arg"

/* console.log(obj1)
console.log(obj2) */
/*Se modificó obj1 porque los objetos se guardan como 
referencia, no como valores*/

//BLOQUE DE CÓDIGO: LET ACTUA SOLO EN EL BLOQUE DE CÓDIGO EN EL QUE SE DECLARA (BLOQUE: "LO QUE SE DA ENTRE DOS LLAVES")
function foo(){
    let i = 0

    if(true){
        let i = 1
        console.log(i)
    }
    console.log(i) /* */

    //con let imprime 1 y 0 porque respeta el bloque de código en el que se declaró la variable
    //con var imprime 1 y 1

    //Si yo hago

/*     if(true){
        let i = 1
        console.log(i)
    }
    console.log(i) */
    //esto tira error
}

foo()

//Const se comporta como let en cuanto a bloque de código. Las constantes no pueden modificarse

/* const name = "OwO"
name = "uwu" */

//No puedo reasignar una constante pero sí modificar la propiedad de un objeto:

const persona = {nombre: 'Lucas'};
persona.nombre = "Fernando"

console.log(persona.nombre)

//Qué es una función? Son bloques de instrucciones que trabajan sobre un scope interno

function suma(){
    
}