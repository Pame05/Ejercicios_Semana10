'use strict'
//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.
let url = 'https://www.facebook.com/danielle.novillo.1'
let buscarNombre = url.indexOf('m/');
let usuario = url.slice (buscarNombre+2);
alert ('El nombre de usuario es '+usuario);