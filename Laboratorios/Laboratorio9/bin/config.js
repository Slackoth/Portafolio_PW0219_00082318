const mongoose = require('mongoose');
const dataBase = 'RegisterDB';
let host = 'localhost';
let port = '27017';
let uri = `mongodb://${host}:${port}/${dataBase}`;

const connect = ()=>{
    //Programacion asincrona
    mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(`Database ${dataBase} was connected successful`);
    })
    .catch(()=>{
        console.log('An error has ocurred');
    });
}

//Para que otros puedan accesar a connect
module.exports = {
    connect
}