const leia = require("readline-sync");

let numeros;
let  contador;
let impar = 0; 
let par = 0;



for(contador = 1; contador <= 10; contador++){
    numeros= leia.questionInt(`Digite o ${contador} numero: `);
 
    if(numeros % 2 == 0 ){
       par++;
    }

    if(numeros % 2 !== 0){
        impar++;
    }


}

console.log(`Total de Numeros pares: ${par}`)
console.log(`Total de Numeros impares: ${impar}`)