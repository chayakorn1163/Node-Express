const http = require("http");

var routes = {
  "/": function index(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Chayakon Prathumchai");
  },
  "/foo": function foo(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end('You are now viewing "foo"');
  },
};

const server = http.createServer((request, response) => {
  if (routes[request.url]) {
    return routes[request.url](request, response);
  }

  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 Not Found");
});

server.listen(1337, () => {
  console.log("Server is listening on port 1337");
});
