//Importaciones
const express = require('express');
const path = require('path');
const pug = require('pug');
const dotenv = require('dotenv');
const router = require('./routes/routes');
require('./database/db');

dotenv.config()

const port = process.env.PORT;

const server = express();

//Configuracion
server.use('/', express.static(path.join(__dirname, './public')));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Views Engine
server.set('views', path.join(__dirname, './views'));
server.set('view engine', 'pug');

server.use('/', router);

//  Hay que pasar el port antes del callback
server.listen(port, () => {
  console.log(' Server is running on port ' + port);
  console.log('Click here: http://localhost:' + port + '\n');
});