const http = require("http");

function index(req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
}

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      return index(req, res);
    }

    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
  })
  .listen(1337, () => {
    console.log("Server is listening on port ");
  });

  var routes = {
 '/': function index (request, response) {
 response.writeHead(200);
 response.end('Hello, World!');
 },
 '/foo': function foo (request, response) {
 response.writeHead(200);
 response.end('You are now viewing "foo"');
 }
}