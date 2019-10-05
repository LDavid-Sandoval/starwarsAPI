const express = require ('express');
const morgan = require('morgan');
const path = require ('path');
const cors = require('cors');
require('dotenv').config();

const mongoose =  require('./database.js')

const app = express ();
//settings
app.set('port', process.env.PORT || 4000 )

//Middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/starship',require('./routes/starships.routes'))

///static Files
app.use(express.static(path.join(__dirname, 'public')))

//Server Start
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`);
})