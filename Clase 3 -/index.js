//Funciones tradicionales

function suma(a=45, b){
    return a + b;
}

console.log(suma(undefined,6));

//Funciones flecha
const sum = (a, b=44) => {
    return a + b;
}

//Funciones anónimas
(function(a , b){
    console.log(a + b);
})(4, 5)

//Callback: función que se pasa como parámetro de otra función 