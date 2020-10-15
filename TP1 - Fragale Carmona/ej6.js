


arr= [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];
function aprobo(arr){
return arr.every(notas => notas >= 4);
}
function quienesAprobaron(arrNotas) {
    return arrNotas.filter(student => aprobo(student));
}
console.log(quienesAprobaron(array))
