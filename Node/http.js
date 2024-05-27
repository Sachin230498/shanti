const http = require('http');

//create the server
const server = http.createServer((req, res) => {
    
   res.setHeader("Content-Type", "text/html");

   // res.write("welcome to our  server");
    res.end("<h1> welcome to our  server </h1>");
})

// start the server
const PORT = 8081;

server.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})





