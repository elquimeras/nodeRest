const express = require('express');
const router = express.Router();
const userModel = require('../models/usersModel');

// Autenticar usuarios
router.post('/', function (req, res) {
    
	if(!req.body.username || !req.body.username){
		res.status(200).send({ success: false, message: 'Debe indicar usuario y contraseña' });
	}

    let userData = {
        username : req.body.username,
        password : req.body.password
    };

	userModel.getUser(userData, function(error, data){
		if(data.length)
	 		return res.status(200).send({ success: true, data: data, message: 'Autenticación Satisfactoria' });
	 	return res.status(200).send({ success: false, data: data, message: 'Usuario o contraseña inválidos.' });
	});
});

module.exports = router;