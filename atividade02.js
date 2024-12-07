const leia = require('readline-sync')

let idade; 
let menorDe21 = 0;
let maiorDe50 = 0;
let totalPessoa = 0;
let contador;
let continua = 'S'

while(continua === 'S') {
    idade = leia.questionInt("\nDigite a Idade: ")

    if( idade < 0){
        console.log("Idade Invalida!!")
    }

   if(idade <= 21){
    menorDe21++
   }

   if(idade >= 50){
    maiorDe50++
   }

   continua = leia.question("Deseja continuar? (S/N) ").toUpperCase();

}

console.log(`Total de pessoas menores de 21 anos: ${menorDe21}`)
console.log(`Total de pessoas maiores de 50 anos : ${maiorDe50}`)

