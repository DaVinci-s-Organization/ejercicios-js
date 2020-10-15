

const numeros = ([7,9,25,42,99,2,105]);

var cuantosCumplen = numeros.reduce(function(contador, numeros) {
    if(numeros % 2 == 0 ) {
        return contador + 1;
    } else {
        return contador;
    }
}, 0) 

console.log(cuantosCumplen);
