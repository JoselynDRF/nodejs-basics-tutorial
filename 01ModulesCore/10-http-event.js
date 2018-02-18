'use strict';

const http = require('http').createServer();
const hostname = '127.0.0.1';
const port = 3000;

const webServer = (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('<h1> Hello World </h1>\n');
}

http
  .on('request', webServer)
  .listen(port, hostname);

console.log('El servidor se está ejecutando');