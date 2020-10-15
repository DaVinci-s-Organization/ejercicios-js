

var notas = [8,6,2,4];

// function aprobo (s) {
//     return s >= 4;
// }

const aprobo = (s) => s >= 4;

console.log(notas.every(aprobo));