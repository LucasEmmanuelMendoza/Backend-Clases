/*-Realizar una lista nueva que contenga todos los tipos de 
productos(no cantidades), consejo: utilizar Object.keys y Array.includes.
Mostrar el array por consola.
-Posteriormente, obtener el total de productos vendidos por todos los objetos
(utilizar Object.values)*/

let array = [
    {
        manzana: 3,
        peras: 2,
        carne: 1,
        huevo: 4
    },
    {
        galletitas: 5,
        naranjas: 4,
        shampoo: 3
    }
]

let arr1 = Object.keys(array[0])
let arr2 = Object.keys(array[0])

let nuevoArr = [...arr1, ...arr2]
console.log(nuevoArr)

let cant1 = Object.values(array[0])
let cant2 = Object.values(array[0])

let nuevoArr2 = [...cant1, ...cant2]

let suma = nuevoArr2.reduce((sumaAux, elem) => sumaAux + elem, 0)
console.log("suma:", suma)