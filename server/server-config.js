var express = require( 'express' );
var handler = require( './lib/request-handler' );
var bodyParser = require('body-parser');

var app = express();

// serve up the webpage
app.use( express.static(__dirname + '/../client') );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.get( '/', handler.renderIndex );
app.get( '/*', handler.redirToIndex );
app.post( '/logo', handler.sendData );
module.exports = app;
