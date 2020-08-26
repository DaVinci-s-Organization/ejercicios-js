

var arr = [7,8,9];

var elemento = 8;

function contiene (i) {
    return i == elemento;
}

console.log(arr.some(contiene));