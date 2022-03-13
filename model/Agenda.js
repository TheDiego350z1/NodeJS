module.exports = {
    obtener:function(conexion, funcion) {
        conexion.query("SELECT * FROM contactos", funcion);
    },
    insertar:function(conexion, datos, funcion) {
        conexion.query("INSERT INTO contactos (nombre, pellido, correo, tel) VALUES (?,?,?,?)",[datos.nombre, datos.pellido, datos.correo, datos.tel], funcion);
    },
    retornarDatosID:function(conexion, id, funcion){
        conexion.query("SELECT * FROM contactos WHERE id=? ", [id], funcion )
    },
    borrar:function(conexion, id, funcion) {
        conexion.query("DELETE FROM contactos WHERE id=? ", [id], funcion);
    },
    actualixar:function(conexion, datos, funcion) {
        conexion.query("UPDATE contactos SET nombre=?, pellido=?, correo=?, tel=? WHERE id=? ", [datos.nombre, datos.pellido, datos.correo, datos.tel, datos.id], funcion );
    }
};