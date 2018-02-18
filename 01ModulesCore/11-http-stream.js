'use strict';

const http = require('http').createServer(webServer);
const fs = require('fs');
const index = fs.createReadStream('assets/index.html');

function webServer(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  index.pipe(response);
}

http.listen(3000);

console.log('El servidor se está ejecutando');