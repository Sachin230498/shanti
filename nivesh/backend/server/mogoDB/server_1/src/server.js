import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// Initialize app
const app = express();
const PORT = 8081;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/DemoDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// User schema and model
const userSchema = new mongoose.Schema({
  name:  {type: String, required: true ,unique:true},
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express MongoDB App");
});

// Create user (POST)
app.post("/users", async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = new User({ name, password });
    await newUser.save();
    res
      .status(201)
      .send({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).send({ message: "Error creating user", error: err });
  }
});

// Get all users (GET)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: "Error fetching users", error: err });
  }
});

// Update user (PUT)
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, password },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res
      .status(200)
      .send({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).send({ message: "Error updating user", error: err });
  }
});

// Delete user (DELETE)
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res
      .status(200)
      .send({ message: "User deleted successfully", user: deletedUser });
  } catch (err) {
    res.status(500).send({ message: "Error deleting user", error: err });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
