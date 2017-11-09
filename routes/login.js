const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const userModel = require('../models/usersModel');

// Obtener usuario por datos de autentificación
router.get('/', function (req, res) {
    let userData = {
        username : req.body.username,
        password : req.body.password
    };

    userModel.getUser(userData, function(error, data){
	 	res.status(200).send({ success: true, data: data, message: 'Logín Correcto' });
	});
});

module.exports = router;