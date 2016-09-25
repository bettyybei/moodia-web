var http = require('http');
var server = http.createServer();

var app = require('./server/index.js')();

server.on('request', app);

var PORT = process.env.PORT || 3000;

server.listen(PORT, function () {
  console.log('The server is listening on port 3000!');
});