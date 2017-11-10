// -- [MySQL]
const mysql = require('mysql');
global.dba = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeRest',
    port: 3306
});
global.dba.connect();