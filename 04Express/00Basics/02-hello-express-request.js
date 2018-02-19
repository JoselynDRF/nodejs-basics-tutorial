'use strict';

var express = require('express'),
    app = express();

app
  .get('/', (req, res) => {
    res.end('<h1> Hola mundo desde Express </h1>');
  })
  .get('/user/:id-:name-:age', (req, res) => {
    res.end(`
      <h1> 
        Bienvenido a Express ${req.params.name}!
        Tu ID es ${req.params.id}
        y tu edad es de ${req.params.age}
      </h1>`)
  })
  .get('/search', (req, res) => {
    res.end(`
      <h1> 
        Bienvenido a Express, los resultados de tu busqueda son:
        <mark> ${req.query.s} </mark>
      </h1>`)
  })

app.listen(3000);

console.log('Iniciando Express en el puerto 3000...');