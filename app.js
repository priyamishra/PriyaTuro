/*
******************************
Application: Turo Car Rental
Created By: Priya Mishra
File: app.js
Last Updated: 12/09/2015
******************************
*/

//This Code is for CORS that gives web servers cross-domain access controls, which enable secure cross-domain data transfers.

// Creates an Express application. 
var express = require('express'),
    request = require('request');

//The express() function is a top-level function exported by the express module.
var app = express(); // the main app

var apiURL = 'http://api.hotwire.com'; // The Rental Car Shopping API base URL

app.use(express.static(__dirname + '/'));	// built-in middleware esponsible for serving the static assets of an Express application.

	app.get('*', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*"); // HTTP response headers that servers send back for access control requests as defined by the Cross-Origin Resource Sharing specification
  res.header("Access-Control-Allow-Headers", "X-Requested-With"); //Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.

  request.get(apiURL + req.originalUrl, function(err, r_res, body) {
    if (err) res.send(500);
    else res.send(body);
  });
}); 

//Binds and listens for connections on the specified host and port.
var port = process.env.PORT || 5555;
app.listen(port, function() {
  console.log('Listening on ' + port + '.');
});