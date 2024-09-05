// Vanilla version of creating a server using node js
// Nowadays we create server using node's framework like expressjs to create server

// Express JS is a framework of the node js

import http from "http";

// Create our server
const server = http.createServer((req, res) => {
    console.log(req);
    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404;
    // res.statusMessage = "BAD";
    // Shorthand for status (code, message and header)
    res.writeHead(200, "Good", { "Content-Type": "text/html" });
    res.write("<h1>Hello from Node.js server</h1>");
});

// Server listening on port 8000
server.listen(3000, () => console.log("Server is up!!"));