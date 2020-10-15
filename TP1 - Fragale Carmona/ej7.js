

var numeros = [2,-3,9];

// function hayNegativo(n) {
//     return n < 0;
// }

const hayNegativo = (n) => n < 0; 

console.log(numeros.some(hayNegativo));