CREATE SCHEMA Agenda;

USE Agenda;

CREATE TABLE contactos(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    pellido VARCHAR(30),
    correo VARCHAR(100),
    tel VARCHAR(8)
);