// Create web server
// Create a web server that listens on port 3000 and serves the comments.htm

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('comments.htm', function(err, data) {
    response.write(data);
    response.end();
  });
});

// Listen on port 3000, IP defaults to