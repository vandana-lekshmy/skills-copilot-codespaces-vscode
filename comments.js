// Create web server
// 1. Load the module
// 2. Create a web server
// 3. Start the web server

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(3000);
