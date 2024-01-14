function sume(num1, num2){

    return num1 + num2
}

console.log(sume(1, 3))

//función flecha
const suma = (num1, num2) => {
    return num1 + num2;
}
//pero con estas funciones puedo evitar las llaves y el return:
//RETURN IMPLÍCITO: SIEMPRE Y CUANDO SOLO HAYA UNA INSTRUCCIÓN DE CÓDIGO
const sum2 = (num1, num2) =>num1 + num2;

console.log(sum2(1,2));

const saludo = name => 'Hola ' + name;

console.log(saludo("Lucas"));