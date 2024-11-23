import express from "express";

// Initialize app
const app = express();

app.use(express.json()); // Middleware for parsing JSON

let data = []; // Sample in-memory data storage

// Routes

// Home route
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello</h1>
    <button>Click</button>
    <input type="text">
  `);
});

// Retrieve all data
app.get("/data", (req, res) => {
  res.json(data);
});

// Add new data (POST request)
app.post("/postData", (req, res) => {
  let main_data = req.body;
  main_data.id = data.length + 1; // Assign a unique ID
  data.push(main_data);
  res.status(201).json({ message: "Data added successfully", data });
});

// Update data by ID (PUT request)
app.put("/update/:id", (req, res) => {
  const { id } = req.params; // Extract ID from the URL
  const updatedData = req.body; // Get the updated data from the request body

  const index = data.findIndex((item) => item.id === parseInt(id)); // Find the item by ID
  if (index === -1) {
    return res.status(404).json({ message: "Data not found" });
  }

  data[index] = { ...data[index], ...updatedData }; // Merge existing data with updated data
  res.json({ message: "Data updated successfully", updatedData: data[index] });
});

// Delete data by ID (DELETE request)
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params; // Extract ID from the URL

  const index = data.findIndex((item) => item.id === parseInt(id)); // Find the item by ID
  if (index === -1) {
    return res.status(404).json({ message: "Data not found" });
  }

  const deletedItem = data.splice(index, 1); // Remove the item from the array
  res.json({ message: "Data deleted successfully", deletedItem });
});

// Server
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
