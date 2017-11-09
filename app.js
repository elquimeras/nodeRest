const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const users = require('./routes/users');

const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Ruta por defecto
app.get('/', function (req, res) {
    return res.send({ success: false, message: 'Web API NodeJS + MySQL by @elquimeras!' })
});

app.use('/users', users);

// Cualquier ruta no configurada devuelve error
app.all("*", function (req, res, next) {
    return res.status(404).send('Pagína no encontrada');
    next();
});

// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('APP activa en puerto 8080');
});