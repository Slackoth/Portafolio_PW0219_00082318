//npm = node package manager administra paquetes o modulos nuevos para nuestro proyecto
//npmjs.com
const http = require('http');
const colors = require('colors');
const handleServer = (request, response) => {
    response.writeHead(200, {'Content-type': 'text/html'}); //Chequear codigos de estado de HTTP
    response.write('<h1>Hey listen!</h1>');
    response.end(); 
}
const server = http.createServer(handleServer);
server.listen(3000, (error) => {
    if (error) {
        console.log(errror);
        
    } else {
        console.log('Server on port 3000'.green);
        
    }
})
//npm init 
//npm install colors --save

//http.createServer(handleServer).listen(3000);

// http.createServer((request, response) => {
//     response.writeHead(200, {'Content-type': 'text/html'}); //Chequear codigos de estado de HTTP
//     response.write('<h1>Hey listen!</h1>');
//     response.end(); //Le estamos diciendo que termino la respuesta
//     /*Cabe destacar que una vez creado el servidor, al intentar cambiar la respuesta
//     Hey Listen! esta no cambiara porque el servidor se crea con el primero codigo*/
// }).listen(3000); /*El metodo listen simplemente le esta diciendo
// en que puerto va escuchar el servidor, en que puerto ejecutara el servidor*/
// //Chequear localhost:3000

