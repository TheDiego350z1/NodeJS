var mysql = require('mysql'); //Importamos mysql

/**
 * Objeto para la conexión con la base de datos 
 */
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Control_Gastos'
});


/**
 * Nos conectamos a la base de datos
 */
con.connect(
    (err) => {
        if(!err) {
            console.log('Conexión establecida');
        } else {
            console.log('Error de conexión');
        }
    }
);

module.exports = con;