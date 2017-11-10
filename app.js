const express = require('express');
const bodyParser = require('body-parser');
const login = require('./routes/login');
const users = require('./routes/users');
require('./dba');

const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
// Ruta por defecto
app.get('/', function (req, res) {
    res.send({ success: false, message: 'Web API NodeJS + MySQL by @elquimeras!' })
});

app.use('/login', login);
app.use('/users', users);

// Cualquier ruta no configurada devuelve error
app.all("*", function (req, res, next) {
    return res.status(404).send({ success: false, message: 'Método inválido' });
    next();
});

// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('APP activa en puerto 8080');
});