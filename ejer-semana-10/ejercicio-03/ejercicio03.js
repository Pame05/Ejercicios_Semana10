'use strict'
// Escribir un programa que obtenga el mes 
// de la siguiente fecha: “2022-10”

let fecha = '1996-12-05';
let month = fecha.indexOf('-');
let mes = fecha.slice(month+1,7);
alert ('El mes es '+ mes);