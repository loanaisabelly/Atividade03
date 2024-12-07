const leia = require('readline-sync')

let vetorInteiro = new Array(10);
let soma = 0;
let vetorIndiceImpar = new Array(5);
let par = 0;
let impar = 0;
let vetorElementoPar = new Array(5);
let media = 0;

for (let contador = 0; contador < vetorInteiro.length; contador++) {
  vetorInteiro[contador] = leia.questionInt(`Digite o ${contador} numero: `);


  if (contador % 2 !== 0) {
    vetorIndiceImpar[impar] = vetorInteiro[contador]
    impar++;
  }

  if (vetorInteiro[contador] % 2 == 0) {
    vetorElementoPar[par] = vetorInteiro[contador]
    par++;
  }

  soma = soma + vetorInteiro[contador]

}


media = soma / vetorInteiro.length


console.log(`\Os elementos nos indices impares: `);
for (let contador = 0; contador < vetorIndiceImpar.length; contador++) {
  console.log(`${vetorIndiceImpar[contador]}`);
}

console.log(`\Os elementos pares: `);
for (let contador = 0; contador < vetorElementoPar.length; contador++) {
  console.log(`${vetorElementoPar[contador]}`);
}


console.log(`\nA soma de todos os Elementos foi: ${soma}`);
console.log(`\nA média dos elementos foram: ${media}`);


