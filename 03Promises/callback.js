'use strict';

var fs = require('fs'),
    file = './assets/names.txt',
    newFile = './assets/names-callback.txt';

fs.access(file, fs.F_OK, function(err) {
  if (err) {
    console.log('El archivo no existe');
  } else {
    console.log('El archivo existe');
    fs.readFile(file, function(err, data) {
      if(err) {
        console.log('El archivo no se puedo leer');
      } else {
        console.log('El archivo se ha leído exitosamente');
        fs.writeFile(newFile, data, function(err) {
          return (err) ? console.log('El archivo no se pudo copiar') : console.log('El archivo se ha copiado exitosamente');
        })
      }
    })
  }
})