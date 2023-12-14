'use strict'

// Escribir un programa para obtener el nombre de usuario de un correo electrónico.
let correo = "pamela@hotmail.com";
let buscarArroba = correo.indexOf('@');
let usuario = correo.slice(0,buscarArroba);
alert('Su usuario asignadao es '+usuario);