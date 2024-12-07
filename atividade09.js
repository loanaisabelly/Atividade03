
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

console.log("Elementos da Diagonal Principal:");

for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
    somaDiagonalPrincipal += matriz[i][i];
}

console.log("Elementos da Diagonal Secundária:");

for (let i = 0; i < 3; i++) {
    console.log(matriz[i][2 - i]);
    somaDiagonalSecundaria += matriz[i][2 - i];
}

console.log("Soma da Diagonal Principal:", somaDiagonalPrincipal);
console.log("Soma da Diagonal Secundária:", somaDiagonalSecundaria);
