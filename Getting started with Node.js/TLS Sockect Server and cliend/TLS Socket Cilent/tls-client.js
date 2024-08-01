// TLS Socket Client

"use strict";

var tls = require("tls");
var fs = require("fs");

const PORT = 1337;
const HOST = "127.0.0.1";

// Pass the certs to the server and let it know to proceed even unauthorized certs.
    var options = {
        key: fs.readFileSync("private-key.pem"),
            cert: fs.readFileSync("public-cert.pem"),
                rejectUnauthorized: false, // Correct spelling: rejectUnauthorized
    };

var client = tls.connect(PORT, HOST, options, function () {
  // Check if the authentication worked
    if (client.authorized) {
        console.log("Connection authorized by a Certificate Authority.");
    } else {
        console.log("Connection not authorized: " + client.authorizationError);
    }

  // Send a friendly message
    client.write("Hello, I am the client sending you a message.");
});

client.on("data", function (data) {
    console.log(
        "Received: %s [it is %d bytes long]",
        data.toString().replace(/(\n)/gm, ""),
        data.length
    );
    // Close the connection after receiving the message
    client.end();
    });

// When an error occurs, show it
client.on("error", function (error) {
    console.error(error);
    // Close the connection after the error occurred
    client.destroy();
    });

// Let us know when the connection ends
client.on("end", function () {
    console.log("Connection ended");
    });
