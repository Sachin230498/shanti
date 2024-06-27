//import the imp module
const express = require('express');
const fs = require('fs');
const cors = require('cors');



//initialize the express application
const app = express();

app.use(express.json());
app.use(cors());


//define the routes
app.get("/", (req,res) => {
    // res.write("Welcome to the Express server!");
    // res.end()
    res.send("<h1>Welcome to the Express server </h1>");
})

app.get("/welcome", (req, res) => {
  // res.write("Welcome to the Express server!");
  // res.end()

  res.status(200).send("<h1>Welcome to the server </h1>");
});


app.post("/post", (req, res) => {
  try {
    let data = req.body;
    console.log(req.body,"sds");
  res.status(201).send({message:"Data Received", data});
  } catch (error) {
    res.status(500).send({message: "Error occurred", error});
  }
 
})


app.get("/data", (req, res) => {
    const data = fs.createReadStream("./db.json", "utf-8");
    data.pipe(res)
})
 
app.get("/student", (req, res) => { 
    const data = fs.readFileSync("./db.json", "utf-8");
    const Parse_data = JSON.parse(data);
    console.log(Parse_data.students);
    res.send(Parse_data.students)
})

app.get("/teachers", (req, res) => {
  const data = fs.readFileSync("./db.json", "utf-8");
  const Parse_data = JSON.parse(data);
  console.log(Parse_data.teachers);
  res.send(Parse_data.teachers)
});


app.post("/addStudent/", (req, res) => { 
    //step 1
    const data = fs.readFileSync("./db.json", "utf-8"); 
    //parse the data
    const Parse_data = JSON.parse(data);
    //add the student data
    Parse_data.students.push(req.body);

    //adding the data file
    fs.writeFileSync("./db.json",JSON.stringify(Parse_data));

    res.send("student added successfully")
})


app.post("/addTeacher", (req, res) => {
  //step 1
  const data = fs.readFileSync("./db.json", "utf-8");
  //parse the data
  const Parse_data = JSON.parse(data);
  //add the student data
  Parse_data.teachers.push(req.body);

  //adding the data file
  fs.writeFileSync("./db.json", JSON.stringify(Parse_data));

  res.send("teacher added successfully");
});


//Put/Patch Method to update the student

app.put("/updateStudent/:id", (req, res) => { 
  const data = fs.readFileSync("./db.json", "utf-8");
 
    const Parse_data = JSON.parse(data);
     
  const updateStudent = Parse_data.students.findIndex(students => students.id === req.params.id);

  
  if (updateStudent === -1) {
    res.status(404).send("Student not found");
    return;
  }

  Parse_data.students[updateStudent]= {...Parse_data.students[updateStudent], ...req.body }
  fs.writeFileSync("./db.json", JSON.stringify(Parse_data));
  
  res.send("student updated successfully");

})


//Delete method to delete students

app.delete("/deleteStudent/:id", (req, res) => {
  const data = fs.readFileSync("./db.json", "utf-8");

  const Parse_data = JSON.parse(data);

  const delStudent = Parse_data.students.filter(
    (students) => students.id === req.params.id
  );
  if (delStudent === Parse_data.students.length) {
    res.status(404).send("Student not found");
    return;
  }

  Parse_data.students = delStudent
  fs.writeFileSync("./db.json", JSON.stringify(Parse_data));

  res.send("student deleted successfully");
});





// let arr = [{name: "Student"}]
// let arr1 = [{ city: "bhopal"}]


// let abc = [...arr , ...arr1]
// console.log(abc);





//server start
const PORT = 8081;

app.listen(PORT, () => {
    console.log(`server starting on http://localhost:${PORT}`);
});

