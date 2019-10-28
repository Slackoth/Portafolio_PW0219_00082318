
/*Código nodejs (ctrl K, C to comment)
(ctrl K, U to uncomment)
El "./" es para indicarle a nodejs que el archivo
esta dentro de la misma carpeta, debido a que nodejs
toma las rutas iniciales del sistema operativo*/
const math = require('./math.js'); 
/*Esta funcion nos devuelve todo lo que se encuentre en ese archivo
y lo guardamos en una variable*/
console.log(math.add(1,2));
console.log(math.substract(1,2))
console.log(math.multiply(1,2))
console.log(math.divide(1,2))
/*Si mostramos math podemos ver que es un objeto 
con atributos que son funciones*/
console.log(math);

