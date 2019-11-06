const mongoose = require('mongoose');

const RegisterSchema = mongoose.Schema({
    'carnet': String,
    'schedule': String,
    'isLate': Boolean,
    'dateTime': Date
});

//Exporta y mongoose crea un modelo y coleccion en base al esquema que hicimos previamente
module.exports = mongoose.model('Register', RegisterSchema);
