const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 4000;



app.use(express.json());


app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send("<h1>Welcome</h1>");
})

app.get("/data", (req, res) => { 
  const dataStream = fs.createReadStream("./data.json", "utf-8");
  dataStream.pipe(res);
})

app.post("/adddata", (req, res) => { 
  console.log(req.body);
  res.send("data has been sent");
})


app.get("/students", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8");
  const Prase_data = JSON.parse(data);
  console.log(Prase_data.students);
  res.send(Prase_data.students);
});

app.get("/teachers", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8");
  const Prase_data = JSON.parse(data);
  console.log(Prase_data.teachers);
  res.send(Prase_data.teachers);
});


app.post("/addstudents", (req, res) => { 
  //step-1
  const data = fs.readFileSync("./data.json", "utf-8");
  //console.log(data);
  //step-2 parse the data
  const Prase_data = JSON.parse(data);
  //step-3 Add the data in students
  //console.log(Prase_data.students);
  Prase_data.students.push(req.body)
  //adding the data file
  fs.writeFileSync("./data.json",JSON.stringify(Prase_data))
  
  res.send(req.body);
})








app.post("/login", (req, res) => { 
    
    res.send("login success")
})



app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});



