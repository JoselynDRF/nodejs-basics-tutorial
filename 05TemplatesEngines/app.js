'use strict';

var express = require('express'),
    favicon = require('serve-favicon'),
    jade = require('jade'),
    routes = require('./routes/index'),
    faviconURL = `${__dirname}/public/img/favicon.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = express.static(`${__dirname}/views`),
    port = (process.env.PORT || 3000),
    app = express();

app
  // Configuring app
  .set('views', viewDir)
  .set('view engine', 'jade')
  .set('port', port)

  // Executing middlewares
  .use(favicon(faviconURL))
  .use(publicDir)
  .use('/', routes) // Execute routing middleware

module.exports = app;