let numbers = [1, 2, 3]
let numbersP = [2, 4, 6]

console.log(...numbers); /*esto imprime los valores de un 
array uno al lado del otro pero sin llaves ni comas*/

let arraNew = [numbers, numbersP]//Esto me devuelve un array con dos arrays
console.log(arraNew);

let arraNew2 = [...numbers, ...numbersP] 
console.log(arraNew2);

let empleados = {
    emp1: 'Ju',
    emp2: "Maria",
    emp3: "Lucas"
}

let jefes = {
    jefe1: "Juli",
    jefe2: "Maria"
}

//console.log(...empleados);Esto no anda... :
console.log({...empleados});
console.log({...empleados, emp4: "Juan"});

let empleadosEmpresa = {...empleados, ...jefes};
console.log(empleadosEmpresa);
console.log(Object.values(empleadosEmpresa));

//========== REST =============
let empleados2 = {
    emp1: 'Ju',
    emp2: "Maria",
    emp3: "Lucas"
}
//Esto es desestructuración
//const {emp2} = empleados2; traemos solo lo que 
//console.log(emp2);

//Rest: 
const {emp2, ...rest} = empleados2 //Esto trae TODO menos emp2
console.log(rest)

const {emp1, emp3, ...rest2} = empleados2 //Esto trae TODO menos emp1 y emp3
console.log(rest2)
