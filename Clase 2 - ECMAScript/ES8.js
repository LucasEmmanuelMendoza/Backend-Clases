let obj = {
    name:'Caro',
    lastName:'Martinez',
    age: 54
}
/* 
let obj1 = Object.entries(obj)//[[ 'name', 'Caro' ], [ 'lastName', 'Martinez' ], [ 'age', 54 ] ] 
console.log(obj)//{ name: 'Caro', lastName: 'Martinez', age: 54 }
console.log(obj1)

let objs=Object.keys(obj)
console.log(objs)

let obj3=Object.values(obj)
console.log(obj3) */

ventasObj = {
    venta1: 100,
    venta2: 200,
    venta3: 55,
    venta4: 10
}

let ventasArray = Object.values(ventasObj)
console.log(ventasArray);

//Promedio: reduce() / length

let suma = ventasArray.reduce((suma, valor) => suma + valor, 0)

console.log(suma / ventasArray.length);
