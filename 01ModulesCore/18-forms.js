'use strict';

var http = require('http').createServer(webServer);
var form = require('fs').readFileSync('assets/form.html');
var querystring = require('querystring');
var util = require('util');
var dataString = '';

function webServer(req, res) {
  if(req.method == 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(form);
  }

  if(req.method == 'POST') {
    req
      .on('data', function(data) {
        dataString += data;
      })
      .on('end', function() {
        var dataObject = querystring.parse(dataString);
        var dataJSON = util.inspect(dataObject);
        var templateString = `
          Los datos enviados por POST como string son: ${dataString}
          Los datos enviados por POST como objeto son: ${dataObject}
          Los datos enviados por POST como JSON son: ${dataJSON}
        `;
        console.log(templateString);
        res.end(templateString);
      })
  }
}

http.listen(3000);

console.log('El servidor se está ejecutando');