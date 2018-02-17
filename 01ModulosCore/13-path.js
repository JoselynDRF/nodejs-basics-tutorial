'use strict';

const http = require('http').createServer(webServer),
      path = require('path'),
      urls = [
        {
          route: '',
          output: '<h2> Home </h2>'
        }, 
        {
          route: 'about',
          output: '<h2> Acerca </h2>'
        }, 
        {
          route: 'contact',
          output: '<h2> Contacto </h2>'
        }
      ]

function webServer(request, response) {
  var message = '<h1> Hola Node.js </h1>',
      pathURL = path.basename(request.url);

      urls.forEach(function(index) {
        if(index.route === pathURL) {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');
          response.end(message + index.output);
        }
      })

      if(!response.finished) {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.end('<h1> Error 404: Not Found </h1>');
      }
}

http.listen(3000);

console.log('El servidor se está ejecutando');