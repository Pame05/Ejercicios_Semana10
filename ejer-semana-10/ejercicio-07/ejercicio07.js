// Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.

'use strict'
let urlCurso='https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link';
let idAnterior = urlCurso.indexOf('d/');
let idPosterior = urlCurso.indexOf('/view');
let idCurso = urlCurso.slice(idAnterior+2,idPosterior);
alert('El id del curso '+idCurso);
