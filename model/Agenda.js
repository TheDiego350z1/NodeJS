module.exports = {
    obtener:function(conexion, funcion) {
        conexion.query("SELECT * FROM contactos", funcion);
    },
    insertar:function(conexion, datos, funcion) {
        conexion.query("INSERT INTO contactos (nombre, pellido, correo, tel) VALUES (?,?,?,?)",[datos.nombre, datos.pellido, datos.correo, datos.tel], funcion);
    },
    borrar:function(conexion, id, funcion) {
        conexion.query("DELETE FROM contactos WHERE id=? ", [id], funcion);
    }
};