// Desarrollar un programa que genere la asignación de letras para las filas 
// de computadoras en un laboratorio. Se debe tener en cuenta que la codificación 
// sigue el formato LAB2#A, donde indica la fila A del laboratorio 2

'use strict'


// let letra1 = 'A';
// let codigo = letra1.codePointAt(0)
// let sigLetra= String.fromCodePoint(codigo+1);
// alert(sigLetra)
 
for (let i = 0; i < 20; i++) {
    
    let letra1 = 'A';
    let codigo = letra1.codePointAt(0);
    let sigLetra= String.fromCodePoint(codigo+i);   
    alert('El laboratorio tiene 20 computadoras y cada una con la siguiente asignación LAB2#'+sigLetra) 
}