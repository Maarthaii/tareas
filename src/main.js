//Importaciones
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const pug = require('pug');

const db = 'mongodb://0.0.0.0:27017/prueba';
const port = 3000;

const server = express();

//Configuracion
// //Ruta estatica
server.use('/', express.static(path.join(__dirname, './public')));

//Conexion
mongoose.connect(db)
    .then(() => console.log('Connected!'));


server.get('/', (req, res) => {
    res.send('');
});

server.get('/', (req, res) => {
    res.send();
});
