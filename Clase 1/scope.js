/* const exampleScope = () => {
    //scope local: solo dentro de la función
    let a = 'Variable declarada dentro de la función'
    //como el scope es local, la variable 'a' solo existe dentro de esta función
    console.log(a)
}

exampleScope()

/* TEMPLATE STRING
let texto = "sapeee uwu 
onichan :v"  ESTO TIRA ERROR*

//CON BACKTICKS ESTO NO PASA:
let texto = `sapeee uwu 
onichan :v`

let name = 'Santiago'
let texto2 = `Hola mi nombre es ${name}`

console.log(texto2);

 */

const mostrarLista = (elementos) => {
    if(elementos.length == 0){
        return "Lista vacía"
    }else{
        const long = elementos.length;
        elementos.forEach(element => {
            console.log(element);
        });
        return long;
    }
}

console.log(mostrarLista([]));
console.log(mostrarLista([true, "hola", 12]));