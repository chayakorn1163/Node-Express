var http = require("http");
var https = require("https");
var fs = require("fs");

// HTTPS Options
var httpsOptions = {
  key: fs.readFileSync("../Server/key.pem"),
  cert: fs.readFileSync("../Server/cert.pem"),
};

var app = function (req, res) {
  res.writeHead(200);
  res.end("hi my name is chayakorn\n");
};

// Create and start HTTP server
http.createServer(app).listen(8888, () => {
  console.log("HTTP Server is listening on port 8888");
});

// Create and start HTTPS server
https.createServer(httpsOptions, app).listen(4433, () => {
  console.log("HTTPS Server is listening on port 4433");
});
