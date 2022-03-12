var conexion = require('../config/conexion'); //Importamos la conexión a la base de datos
var usuario = require('../model/User'); //Importamos el modelo de Usuario

module.exports = {
    index: function(req, res) {
        
        usuario.obtener(conexion, function(err, datos) {
            console.log(datos);
            res.render('users/index', { title: 'Usuarios' });
        });

    }
};