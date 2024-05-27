//import the imp module
const express = require('express');
const fs = require('fs');


//initialize the express application
const app = express();

app.use(express.json());


//define the routes
app.get("/", (req,res) => {
    // res.write("Welcome to the Express server!");
    // res.end()
    res.send("<h1>Welcome to the Express server </h1>");
})

app.get("/welcome", (req, res) => {
  // res.write("Welcome to the Express server!");
  // res.end()

  res.send("<h1>Welcome to the server </h1>");
});


app.post("/post", (req, res) => {

    console.log(req.body);
  res.send({"message": "Post method", "req": req.body})
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
  res.send(Parse_data.teachers);
});


app.post("/addStudent", (req, res) => { 
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




//server start
const PORT = 8081;

app.listen(PORT, () => {
    console.log(`server starting on http://localhost:${PORT}`);
});
