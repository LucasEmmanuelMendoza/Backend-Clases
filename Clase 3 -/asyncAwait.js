const sumar = (a,b) => {
    return new Promise((resolve, reject) => {
        if(a<=0 && b <=0){
            reject('La suma no se puede hacer');
        }{
            resolve(a+b)
        }
    })
}

const functionTest = async () => {
    // await sumar(5,9) AWAIT HACE QUE SUMAR TERMINE ANTES DE SEGUIR
    let res = await sumar(5,9);
    console.log(res);
}

/* const funcionTest3 = async () =>{
    sumar(5, 9).then((res =>  {
        console.log(res)
    })).catch(err)    
} */
//2 formas de resolver promesa: then/catch y try/catch

const functionTest2 = async() => {
    try{
        //try: camino feliz :)
        let res = await sumar(5,6)
        console.log(res)
    }catch(error){
        //catch: camino triste :(
        console.log(error)
    }
}

functionTest2()