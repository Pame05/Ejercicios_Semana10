// Escribir un programa que obtenga las iniciales de
//  un jugador de futbol, sabiendo que se usa iniciales 
//  y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

'use strict'
let iniciales = 'CR-7';
let nombre = iniciales.indexOf('-');
let jugador =iniciales.slice(0,nombre);
alert('Las iniciales del jugador son: '+jugador)
