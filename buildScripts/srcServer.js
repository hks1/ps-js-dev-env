var express = require('express');
var path = require('path');
var open = require('open');
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

var port = 3000;
var app = express();

// Using webpack for bundling
const compiler = webpack(config);
// const compiler = webpack(require('../webpack.config.dev'));

 app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function(err) {
  if(err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
