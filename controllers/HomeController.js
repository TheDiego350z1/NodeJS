var con = require('../config/conexion'); //Importamos la conexión

module.exports = {
    index: function index(req, res) {
        res.render('index', { title: 'Express' });
    }
};