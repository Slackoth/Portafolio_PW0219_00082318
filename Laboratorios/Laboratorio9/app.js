const express = require('express');
const config = require('./bin/config');
const cors = require('cors');
const logger = require('logger')
const indexRouter = require('./routes/register');

var app = express();
app.listen(process.env.PORT || '3000', ()=>{
    console.log('Web server on');
    
});

config.connect();
//app.use(logger('dev'));
app.use(cors());