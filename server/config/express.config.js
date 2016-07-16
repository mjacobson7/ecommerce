var express    = require('express');
var cors       = require('cors');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

module.exports = function() {

  var app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.static('./public'));

  return app;

};
