'use strict';

const http = require('http').createServer(webServer),
      fs = require('fs'),
      path = require('path'),
      url = require('url'),
      urls = [
        {
          id: 1,
          route: '',
          output: 'assets/index.html'
        }, 
        {
          id: 2,
          route: 'about',
          output: 'assets/about.html'
        }, 
        {
          id: 3,
          route: 'contact',
          output: 'assets/contact.html'
        }
      ]

function webServer(request, response) {
  var pathURL = path.basename(request.url),
      id = url.parse(request.url, true).query.id;

      console.log(`path:${pathURL}, id:${id}`);

      urls.forEach(function(index) {
        if(index.route == pathURL || index.id == id) {
          response.statusCode = 200;
          response.setHeader('Content-Type', 'text/html');

          fs.readFile(index.output, function(error, data) {
            if (error) throw error;
            response.end(data);
          });
        }
      })

      if(!response.finished) {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');

        fs.readFile('assets/404.html', function(error, data) {
          if (error) throw error;
          response.end(data);
        });
      }
}

http.listen(3000);

console.log('El servidor se está ejecutando');