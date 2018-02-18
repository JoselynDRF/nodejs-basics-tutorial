'use strict';

var fs = require('fs'),
    Q = require('q'),
    file = './assets/names.txt',
    newFile = './assets/names-promises-q.txt';

function existFile(file) {
  let defer = Q.defer();
  console.log('El archivo existe');

  fs.access(file, fs.F_OK, function(err) {
    return (err) ? defer.reject(new Error('El archivo no existe')) : defer.resolve(true);
  })

  return defer.promise;
}

function readFile(file) {
  let defer = Q.defer();
  console.log('El archivo se ha leído exitosamente');

  fs.readFile(file, function(err, data) {
    return (err) ? defer.reject(new Error('El archivo no se puedo leer')) : defer.resolve(data);
  });

  return defer.promise;
}

function writeFile(file, data) {
  let defer = Q.defer();
  fs.writeFile(file, data, function(err) {
    return (err) ? defer.reject(new Error('El archivo no se pudo copiar')) : defer.resolve('El archivo se ha copiado exitosamente');
  });

  return defer.promise;
}

existFile(file)
  .then(() => { return readFile(file) })
  .then((dataPromise) => { return writeFile(newFile, dataPromise) })
  .then((dataPromise) => { return console.log(dataPromise) })
  .fail((err) => { return console.log(err.message) });