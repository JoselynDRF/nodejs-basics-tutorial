'use strict';

var http = require('http'),
    options = {
      host: 'bextlan.com',
      port: 80,
      path: '/'
    }

http
  .get(options, function(response) {
    console.log(`El sitio web ${options.host} ha respondido. Código de estado: ${response.statusCode}`);
  })
  .on('error', function(error) {
    console.log(`El sitio web ${options.host} no responde. Código de estado: ${error.code}. Error: ${error.message}`);
  })