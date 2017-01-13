"use strict";
var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!\n');
});
var port = 8002;
server.listen(port);
console.log('Listening on http://localhost:' + port);
//# sourceMappingURL=hello_server.js.map