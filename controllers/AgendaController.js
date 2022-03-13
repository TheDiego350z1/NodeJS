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
    },
    eliminar: function(req, res) {
        agenda.borrar(conexion, req.params.id, function(err){
            res.redirect('/agenda');
        });
    },
    editar: function(req, res) {
        agenda.retornarDatosID(conexion, req.params.id, function(err, registro) {
            if(!err) {
                console.log(registro[0])
                res.render('agenda/editar', { title: 'Editar', contacto: registro[0]});
            } else {
                console.log(err);
            }
        });
    },
    actualizar: function(req, res) {
        console.log('actualizar')
        console.log(req.body.nombre);

        if(req.body.nombre && req.body.pellido && req.body.correo && req.body.tel) {
            agenda.actualixar(conexion, req.body, function(err){
                if(err){
                    console.log(err)
                }
            });
            res.redirect('/agenda')
        }

    }
};