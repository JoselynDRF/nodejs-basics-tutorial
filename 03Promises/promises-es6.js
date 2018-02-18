'use strict';

var fs = require('fs'),
    Q = require('q'),
    file = './assets/names.txt',
    newFile = './assets/names-promises-es6.txt';

var promise = new Promise((resolve, reject) => {
  fs.access(file, fs.F_OK, function(err) {
    return (err) ? reject(new Error('El archivo no existe')) : resolve(true);
  })
});

promise
  .then((dataPromise) => {
    console.log('El archivo no existe');

    return new Promise((resolve, reject) => {
      fs.readFile(file, function(err, data) {
        return (err) ? reject(new Error('El archivo no se puedo leer')) : resolve(data);
      })
    });
  })
  .then((dataPromise) => {
    console.log('El archivo se ha leído exitosamente');

    return new Promise((resolve, reject) => {
      fs.writeFile(newFile, dataPromise, function(err) {
        return (err) ? reject(new Error('El archivo no se pudo copiar')) : resolve('El archivo se ha copiado exitosamente');
      })
    });
  })
  .then((dataPromise) => { console.log(dataPromise); })
  .catch((err) => { console.log(err.message) })