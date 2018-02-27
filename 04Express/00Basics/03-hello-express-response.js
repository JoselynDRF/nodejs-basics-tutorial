'use strict';

var express = require('express'),
    app = express();

app
  .get('/', (req, res) => {
    res.send('<h1> Hello World! </h1>');
  })

  .get('/test', (req, res) => {
    res.redirect(301, 'http://bextlan.com')
  })

  .get('/json', (req, res) => {
    res.json({
      name: "Maria",
      age: 31,
      twitter: "@maria"
    })
  })

  // .get('/render', (req, res) => {
  //   res.render('assets/index.html');
  // })

app.listen(3000);

console.log('Iniciando Express en el puerto 3000...');