// Using Nodes internal http module
const http = require('http');

http.createServer(function(request, respone){
  respone.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello Node http server!');
  response.end();
}).listen(3000);