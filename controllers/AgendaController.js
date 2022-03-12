var conexion = require('../config/conexion'); //Importamos la conexión a la base de datos
var agenda = require('../model/Agenda'); //Importamos el modelo de Agenda

module.exports = {
    index: function(req, res) {
        agenda.obtener(conexion, function(err, datos){
            res.render('agenda/index', { title: 'Agenda', contactos: datos });
        });
    },
    crear: function(req, res) {
        res.render('agenda/crear', { title: 'Crear nuevo contacto ' });
    },
    guardar: function(req, res) {
        console.log(req.body);
        agenda.insertar(conexion, req.body, function(err) {

            if(!err) {
                res.redirect('/agenda');
            } else {
                console.log(err)
            }
        });
    }
};