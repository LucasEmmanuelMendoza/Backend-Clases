/*ES6: A partir de este se lo comenzó a considerar una implementación moderna */
/* 
let num = Math.pow(2, 3); //2 al cubo =  2 ** 3
console.log(num);
 */

//Métodos de ARRAYS
let arr = [1,7];

console.log(arr.includes(5))
//Lo que es lo mismo que:
arr.forEach((el) => {
    if(el == 7){
        console.log(true);
    }
})
