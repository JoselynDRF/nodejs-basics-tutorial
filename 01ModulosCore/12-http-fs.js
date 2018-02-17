'use strict';

const http = require('http').createServer(webServer);
const fs = require('fs');

function webServer(request, response) {
  function readFile(error, data) {
    if(error) throw error;
    response.end(data);
  }

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  fs.readFile('assets/index.html', readFile);
}

http.listen(3000);

console.log('El servidor se está ejecutando');