import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// console.log(process.env.PORT)

const PORT = process.env.PORT;

// initilize app

const app = express();
app.use(bodyParser.json());

const ConnectDB = mongoose.connect("mongodb://localhost:27017/mern2");

ConnectDB.then((res) => {
  console.log("connect to db");
}).catch((err) => {
  console.log(err);
});

// scema for db

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  password: { type: String, require: true },
});

// model

const User = mongoose.model("User", userSchema);

// routes

app.get("/", (req, res) => {
  res.send("welcome to our server");
});

app.post("/users", async (req, res) => {
  try {
    const { name, password } = req.body;
    //   console.log(name,password)
    const newUser = new User({ name, password });
    await newUser.save();

    res.status(201).send({ message: "User Created", user: newUser });
    // res.send("data")
  } catch (error) {
    res.status(500).send({ massage: "error creating user", error });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ massage: "error fetching user", error });
  }
});

// update
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //    console.log(abc);
    const { name, password } = req.body;
    const updateUser = await User.findByIdAndUpdate(id, 
        { name, password },
        {new:true}
    );
    res.send(updateUser);
  } catch (error) {
    res.send(error);
  }
});


// update
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const User = await User.findByIdAndDelete(id);
    res.send(User);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(` server is running on http://localhost:${PORT}`);
});
