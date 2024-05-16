//import require moduls
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//intialize the express app
const app = express();

app.use(express.json());
app.use(cors());


//Connect to the database
mongoose.connect("mongodb://0.0.0.0:27017/todoDB")
    .then(() => {
    console.log("Connected to database");
}).catch((err)=>{
    console.log("Failed to connect to database", err);
})

//define a schema/structure for todo items
const todoSchema = new mongoose.Schema({
    first: String,
    last: String,
    Address: String,
})


// define the collection/model for todo items
const Todo =new mongoose.model("Todo", todoSchema);


//define the routes
app.get("/", (req, res) => { 
    res.status(200).send("<h1>Welcome to the server</h1>");
})

app.get("/data", (req, res) => { 
    res.status(200).send("<h1>Welcome to the data</h1>");
})

//Route for get todos
app.get("/get_todos", async (req, res) => {
  try {
    const todos = await Todo.find(); // Retrieve all todo items

    res.status(200).json(todos); // Return the todos as JSON response
  } catch (error) {
    res.status(500).send("Error retrieving todos");
  }
});


//Route to create new todo
app.post("/post_todo", async(req,res) => {

    try {
        const { first, last, Address } = req.body; //Extract from body

        const newTodo = new Todo({ first, last, Address });

        newTodo.save();

     
  res.status(201).send({ message: "todo created successfully", todo: newTodo });

       
    
    } catch (error) {
        res.status(400).send("error creating todo");
    }

})


app.put("/update_todo/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract todo item id from URL
    const { first, last, Address } = req.body; // Extract updated fields from body

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { first, last, Address },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).send("Todo not found");
    }

    res.status(200).send("Todo updated successfully");
  } catch (error) {
    res.status(400).send("Error updating todo");
  }
});


app.delete("/delete_todo/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract todo item id from URL

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).send("Todo not found");
    }

    res.status(200).send("Todo deleted successfully");
  } catch (error) {
    res.status(400).send("Error deleting todo");
  }
});


//server starting
const PORT = 5055
app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})