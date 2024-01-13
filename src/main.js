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
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

//Directorio de la plantilla
server.set('views', './views');
//Motor de plantilla
server.set('view engine', 'pug');



server.get('/', (req, res) => {
    res.render('index.pug', {mensaje: "Un mensaje"});
});


//Conexion
mongoose.connect(db)
    .then(() => console.log('Connected!'));

    server.listen(() => {
        console.log(' Server is running on port ' + port);
        console.log('Click here: http://localhost:' + port + '\n');
      });
      