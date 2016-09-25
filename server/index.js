'use strict'
var path = require('path');
var express = require('express');
var app = express();

module.exports = function () {
  app.use(express.static(path.join(__dirname, '../node_modules')));
  app.use(express.static(path.join(__dirname, '../browser')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  // Error catching endware.
    app.use(function (err, req, res, next) {
        console.error(err);
        console.error(err.stack);
        res.status(err.status || 500).send(err.message || 'Internal server error.');
    });

  return app;
};