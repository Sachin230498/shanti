const http = require("http");
//set the port
const PORT = 8081 || process.env.PORT;

//Create the Server
const server = http.createServer((req, res) => {
  // server logic goes here
  res.setHeader("Content-Type", "application/json");

  //define the routes here

  if (req.url === "/") {
    res.end("Welcome to the Server");
  } else if (req.url === "/about") {
    res.end("About Us");
  } else if (req.url === "/contact") {
    res.end("Contact Us");
  }
});

//Start the server
server.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
