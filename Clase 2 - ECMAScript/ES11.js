let count = 0

let res = count || 'No hay valor'

console.log(res)//no hay valor porque 0 es falsy

//operadores nullish: null y undefined

let c2 = 0
let res2 = c2 ?? 'No hay valor' //res => 0
console.log(res2)
