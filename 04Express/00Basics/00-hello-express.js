'use strict';

var express = require('express'),
    app = express();

app.get('/', (req, res) => {
  res.end('<h1> Hello World! </h1>');
})

app.listen(3000);

console.log('Iniciando Express en el puerto 3000...');