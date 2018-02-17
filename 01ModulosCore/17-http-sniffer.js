'use strict';

var http = require('http');
var htmlCode = '';
var options = {
      host: 'bextlan.com',
      port: 80,
      path: '/'
    };

function httpClient(response) {
  console.log(`El sitio web ${options.host} ha respondido. Código de estado: ${response.statusCode}`);
  response.on('data', function(data) {
    htmlCode += data;
    console.log(data, data.toString());
  })
}

function httpError(error) {
  console.log(`El sitio web ${options.host} no responde. Código de estado: ${error.code}. Error: ${error.message}`);
}

function webServer(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(htmlCode);
}

// Instancia cliente de HTTP
http
  .get(options, httpClient)
  .on('error', httpError)

// Instancia servidor de HTTP
http
  .createServer(webServer)
  .listen(3000)

console.log('El servidor se está ejecutando');