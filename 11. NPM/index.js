import http from "http";

// Creating server
const server = http.createServer((req, res) => {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    res.write("<h1>Hello from Node.js server</h1>");
    res.end("<h1>Home of Node.js server</h1>");
})

// Server listening on port 3000
server.listen(3000, () => console.log("Server is up!!!"));  