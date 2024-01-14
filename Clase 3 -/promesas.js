/*Ejecutar una función adentro de otra función adentro de otra función adentro de...
pending: promesa pendiente
fulfiled: completada
rejected
*/

const sumar = (a,b) =>{
    return new Promise((resolve, reject)=>{
        if(a <= 0 && b <= 0){
            reject('La suma no puede hacerse')
            //se ejecuta reject: se corta el flujo
        }
        resolve(a + b)
    })
}

/* sumar(-3, -4).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
});

sumar(3, -4)
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)});*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))
    .catch((error) => console.log("El error es:", error))