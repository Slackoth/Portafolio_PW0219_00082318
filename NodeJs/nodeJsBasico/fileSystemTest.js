const fs = require('fs');
//Creando un archivo
/*Codigo asincrono, las tareas no son realizadas por nodejs
sino que por otros, ejemplo: el OS, la base de datos, servidor, etc...
Lo que significa que nodejs seguira ejecutando el codigo debajo de la funcion
aunque esta no haya terminado, solo espera el resultado*/
fs.writeFile('./texto.txt', 'linea uno', /*Funcion callback, 
una funcion que se ejecuta al terminar el proceso anterior*/
(error) => {
    if (error) {
        console.log('Archivo no creado');
    }
    else {
        console.log('Archivo creado'); 
    }
});

console.log('penultima linea de codigo');
/*Primero se ejecuta el log "ultima linea de codigo"
y despues archivo creado*/

fs.readFile('./texto.txt', (error, datos) => {
    if (error) {
        console.log(`Error: ${error}`);
        
    } else {
        console.log(datos.toString());
        
    }
});