'use strict';

var express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method'),
    routes = require('./routes/movie-router'),
    faviconURL = `${__dirname}/public/img/favicon.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express();

app
  // Configuring app
  .set('views', viewDir)
  .set('view engine', 'jade')
  .set('port', port)

  // Executing middlewares
  .use(favicon(faviconURL))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(restFul)
  .use(morgan('dev'))
  .use(publicDir)
  .use(routes) // Execute routing middleware

module.exports = app;