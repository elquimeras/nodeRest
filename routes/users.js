const express = require('express');
const router = express.Router();
const userModel = require('../models/usersModel');

// --Listar todos los usuarios
router.get('/', function (req, res) {
    userModel.listUsers(function(error, data){
	 	res.send({ success: true, data: data });
	});
});

// --Agregar un nuevo usuario
router.post('/', function (req, res) {
 	let userData = {
 		first_name : req.body.first_name,
 		last_name : req.body.last_name,
 		email : req.body.email,
 		username : req.body.username,
 		password : req.body.password
 	};
 
    if (!userData) {
        return res.status(400).send({ success:false, message: 'Datos invalidos o inexistentes.' });
    }

    userModel.addUser(userData, function(error, data){
	 	res.status(200).send({ success: true, data: data, message: 'Usuario agregado satisfatoriamente.' });
	});
});

// -- Borrar un usuario
router.delete('/', function (req, res) {
    let userId = req.body.id;
    if (isNaN(userId)) {
        return res.status(400).send({ success: false, message: 'Por favor indique el usuario a eliminar' });
    }

    userModel.delUser(userId, function(error, data){
    	if(data.affectedRows){
	 		res.status(200).send({ success: true,  message: 'El usuario ha sido eliminado.' });
    	}else{
    		res.status(200).send({ success: false, message: 'El usuario no existe.' });
    	}
	});
}); 

// -- Actualizar un usuario
router.put('/', function (req, res) {
    let userData = {
    	id : req.body.id,
 		first_name : req.body.first_name,
 		last_name : req.body.last_name,
 		email : req.body.email,
 		username : req.body.username,
 		password : req.body.password
 	};
 
    if (isNaN(userData.id)) { // -- Si no es númerico el ID del usuario
        return res.status(400).send({ success: false, message: 'Datos invalidos o inexistentes' });
    }
 
    userModel.updateUser(userData, function(error, data){
    	if(data.affectedRows){ // -- Si se actualizo 
    		res.status(200).send({ success: true, data: data, message: 'Usuario actualizado.' });
    	}else{ // -- Si no se encontró el ID
	 		res.status(200).send({ success: false,  data: data, message: 'El usuario no existe.' });
    	}
	});
});

module.exports = router;
