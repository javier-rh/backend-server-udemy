// Requires (Importación de librerías)
var express = require('express');
var mongoose = require('mongoose');


// Inicializamos variables
// Creamos aplicación
var app = express();

// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos \x1b[32m%s\x1b[0m', 'Conexión exitosa')
});

// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

// Escuchar peticiones
app.listen(3000, () => console.log('Servidor express inicializado en el puerto 3000... \x1b[32m%s\x1b[0m', 'online'));