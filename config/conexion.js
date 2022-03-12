var mysql = require('mysql'); //Importamos mysql

/**
 * Objeto para la conexión con la base de datos 
 */
<<<<<<< HEAD
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agenda'
=======
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Control_Gastos'
>>>>>>> 475c6bc4465de33a2ba4383c511f07e986c5bd39
});


/**
 * Nos conectamos a la base de datos
 */
<<<<<<< HEAD
conexion.connect(
=======
con.connect(
>>>>>>> 475c6bc4465de33a2ba4383c511f07e986c5bd39
    (err) => {
        if(!err) {
            console.log('Conexión establecida');
        } else {
            console.log('Error de conexión');
        }
    }
);

<<<<<<< HEAD
module.exports = conexion;
=======
module.exports = con;
>>>>>>> 475c6bc4465de33a2ba4383c511f07e986c5bd39
