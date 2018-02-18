'use strict';

const http = require('http').createServer(webServer),
      path = require('path'),
      url = require('url'),
      urls = [
        {
          id: 1,
          route: '',
          output: '<h2> Home </h2>'
        }, 
        {
          id: 2,
          route: 'about',
          output: '<h2> Acerca </h2>'
        }, 
        {
          id: 3,
          route: 'contact',
          output: '<h2> Contacto </h2>'
        }
      ]

function webServer(request, response) {
  var message = '<h1> Hola Node.js </h1>',
      pathURL = path.basename(request.url),
      id = url.parse(request.url, true).query.id;

      console.log(`path:${pathURL}, id:${id}`);

      urls.forEach(function(index) {
        if(index.route == pathURL || index.id == id) {
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