const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

// console.log(process.env.MONGO_URI)
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get("/data", async (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api", userRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
