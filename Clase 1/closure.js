const saludo = () => {

    function hola(){
        return 'Hola'
    }

    function chau(){
        return 'Chau'
    }

    return{
        hola,
        chau
    }
}

/* console.log(saludo());//retorna la función

console.log(saludo()());//ejecuta la función retornada */
 
/*let fn1 = saludo().hola
let fn2 = saludo().chau 

console.log(fn1())
console.log(fn2())*/

const persona = (altura, edad, nombre) => {

    let altura1 = altura;
    let edad2 = edad;
    let nombre3 = nombre;

    function caminar(){
        return 'Camino'
    }

    function correr(){
        return 'Corro'
    }

    return{
        correr, 
        caminar,
        nombre3,
        edad2,
        altura1
    }
}

let persona1 = persona(174, 25, "Lucas")

console.log(persona1.caminar());