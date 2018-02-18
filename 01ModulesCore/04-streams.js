'use strict';

const fs = require('fs');
const readStream = fs.createReadStream('assets/names.txt');
const writeStream = fs.createWriteStream('assets/names_copy.txt');

readStream.pipe(writeStream); // Abrir canal

// On data --> Es un evento "mientras exista datos..."
// Chunks --> Pedazos de datos del stream
readStream.on('data', (chunk) => 
  console.log('He leído', chunk.length, 'caracteres')
);

// Evento "al terminar"
readStream.on('end', () => console.log("Terminé de leer el archivo"));