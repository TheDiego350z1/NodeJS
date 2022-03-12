var conexion = require('../config/conexion'); //Importamos la conexión a la base de datos
var agenda = require('../model/Agenda'); //Importamos el modelo de Agenda

module.exports = {
    index: function(req, res) {
        agenda.obtener(conexion, function(err, datos){
            console.log(datos);
            res.render('agenda/index', { title: 'Agenda' })
        });
    }
};