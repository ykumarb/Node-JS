// Nowadays people don't use vanilla node js for routing
// specify different routes for users


const port = 4000;

import http from "http";

const server = http.createServer((req, res) => {
        console.log(req.url);
        if (req.url === "/") {
            res.writeHead(200, "OK", { "Content-Type": "text/html" });
                res.end(`
                <section>
                    <h1> Home </h1>
                    <a href='/about'>About</a>
                </section>
            `)
                //res.write("<h1>Hello from Node.js server</h1>");
                // res.end("<h1>Home of Node.js server</h1>");
                res.end("<a href='/contact'>Contact me</a>")
        } else if (req.url === "/about") {
                res.writeHead(200, "OK", { "Content-Type": "text/html" });
                res.end("<h1>About of Node.js server</h1>");
        } else {
                res.writeHead(404, "BAD", { "Content-Type": "text/html" });
                res.end("<h1>404 Page Not Found :( </h1>");
        }
});

server.listen(3000, () => console.log("Server is up!!!"));