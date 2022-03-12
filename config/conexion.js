var mysql = require('mysql'); //Importamos mysql

/**
 * Objeto para la conexión con la base de datos 
 */
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agenda'
});


/**
 * Nos conectamos a la base de datos
 */
conexion.connect(
    (err) => {
        if(!err) {
            console.log('Conexión establecida');
        } else {
            console.log('Error de conexión');
        }
    }
);

module.exports = conexion;
