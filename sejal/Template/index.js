// Import the express module
const express = require("express");
// Create an instance of an Express application
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
// Define a GET route
// Define another GET route
app.get("/about", (req, res) => {
  // Send a response to the client
  res.send("About Page");
});
// Define a POST route
app.post("/data", (req, res) => {
  // Access the data sent in the request body
  const data = req.body;

  // Send a response to the client
  res.send(`Received data: ${JSON.stringify(data)}`);
});

// Define the port number the server will listen on
const port = 3000;

// Start the server and listen on the defined port
app.listen(port, () => {
  // Log a message to the console once the server is running
  console.log(`Server is running on http://localhost:${port}`);
});
