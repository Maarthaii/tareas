//Importaciones
const express = require('express');
const path = require('path');
const router = require('../routes/routes');
require('../database/db');

const server = express();

//Configuracion
server.use('/', express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Views Engine
server.set('views', path.join(__dirname, '../views'));
server.set('view engine', 'pug');

server.use('/', router);

module.exports = server

//  Hay que pasar el port antes del callback
