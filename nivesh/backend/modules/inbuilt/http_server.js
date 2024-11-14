const http = require("http");

// Data storage (in-memory)
let data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// Create the server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Route: GET /api/users
  if (url === "/api/users" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }

  // Route: POST /api/users
  else if (url === "/api/users" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // Collect data
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      newUser.id = data.length + 1; // Add a new ID
      data.push(newUser); // Add to the array
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    });
  }

  // Route not found
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
