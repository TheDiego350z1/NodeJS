var conexion = require('../config/conexion'); //Importamos la conexión a la base de datos
var agenda = require('../model/Agenda'); //Importamos el modelo de Agenda

module.exports = {
    index: function(req, res) {
        agenda.obtener(conexion, function(err, datos){
            // console.log(JSON.parse(datos).length)
            // console.log(typeof(datos))
            
            res.render('agenda/index', { title: 'Agenda', contactos: datos });
        });
    },
    crear: function(req, res) {
        res.render('agenda/crear', { title: 'Crear nuevo contacto ' });
    }
};