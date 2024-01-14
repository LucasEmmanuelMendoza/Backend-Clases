function calculadora(num1, num2, operacion){
    console.log(operacion(num1,num2));
}

function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}

function division(a,b){
    if(b != 0){
        return a / b;
    }
}

const division2 = (a,b) => {if(b != 0) {return a/b}}

function producto(a,b){
    return a * b;
}

calculadora(4, 5, suma);
calculadora(4, 5, resta);
calculadora(4, 5, division);
calculadora(4, 5, producto);
calculadora(4, 5, division2);