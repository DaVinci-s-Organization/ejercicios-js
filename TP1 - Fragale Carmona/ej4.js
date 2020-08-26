

var algunoEsPar = [17,27,33,89];

function seraPar (n) {
    return n % 2 == 0;
}

console.log(algunoEsPar.some(seraPar));