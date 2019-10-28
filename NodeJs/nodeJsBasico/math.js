mathObject = {};

function add(x,y) {
    return x + y;
}
function substract(x,y) {
    return x - y;
}function multiply(x,y) {
    return x * y;
}function divide(x,y) {
    if(y == 0) {
        console.log('Nop');
    }
    else {
        return x / y;
    }
}
/*Codigo nodejs
Son simples funciones, otros archivos no pueden utilizarlas
por lo que hay que exportarlas como un objeto de js*/ 
//Añade una atributo de un objeto
// exports.add = add; 
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

/*O podemos hacerlo un objeto tambien,
agregando atributos que son las funciones*/
mathObject.add = add;
mathObject.substract = substract;
mathObject.multiply = multiply;
mathObject.divide = divide;
//Esta funcion exporta objetos, variables, funciones o cualquier dato de js
module.exports = mathObject;