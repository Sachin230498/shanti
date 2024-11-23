const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// File path for the JSON file
const dataFilePath = path.join(__dirname, "data.json");

// Helper function to read data from the JSON file
const readData = () => {
  const data = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(data || "[]");
};

// Helper function to write data to the JSON file
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
};

readData()
writeData()
// // Routes
// // 1. Create (POST /items)
// app.post("/items", (req, res) => {
//   const { name, description } = req.body;
//   if (!name || !description) {
//     return res
//       .status(400)
//       .json({ message: "Name and description are required" });
//   }

//   const items = readData();
//   const newItem = { id: items.length + 1, name, description };
//   items.push(newItem);
//   writeData(items);

//   res.status(201).json(newItem);
// });

// // 2. Read all items (GET /items)
// app.get("/items", (req, res) => {
//   const items = readData();
//   res.json(items);
// });

// // 3. Read a single item (GET /items/:id)
// app.get("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const items = readData();
//   const item = items.find((i) => i.id === parseInt(id));

//   if (!item) {
//     return res.status(404).json({ message: "Item not found" });
//   }

//   res.json(item);
// });

// // 4. Update (PUT /items/:id)
// app.put("/items/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, description } = req.body;

//   const items = readData();
//   const item = items.find((i) => i.id === parseInt(id));

//   if (!item) {
//     return res.status(404).json({ message: "Item not found" });
//   }

//   if (name) item.name = name;
//   if (description) item.description = description;

//   writeData(items);
//   res.json(item);
// });

// // 5. Delete (DELETE /items/:id)
// app.delete("/items/:id", (req, res) => {
//   const { id } = req.params;

//   let items = readData();
//   const index = items.findIndex((i) => i.id === parseInt(id));

//   if (index === -1) {
//     return res.status(404).json({ message: "Item not found" });
//   }

//   items = items.filter((i) => i.id !== parseInt(id));
//   writeData(items);

//   res.status(204).send(); // No content
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
