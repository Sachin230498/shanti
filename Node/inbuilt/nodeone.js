const http = require("http");

const server = http.createServer((req, res) => {
  
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, GET request!");
  } else if (req.method === "POST" && req.url === "/data") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Received POST data: ${body}`);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
