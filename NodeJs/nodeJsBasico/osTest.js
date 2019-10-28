/*Importando modulos ya hechos para nodejs
En la documentacion de nodejs se pueden encontrar
todos los modulos que tiene ya hechos*/
/*El modulo OS provee operaciones basicas (obtener informacion del sistema operativo)
 del sistema operativo*/
const os = require('os'); //le decimos que esta instalado en el propio sistema operativo
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.freemem());

