import express from "express";
import Connection from "./config/ConnectDB.js";
import userrouter from "./routes/userroutes.js";
// import reviewrouter from "./routes/reviewroutes.js"
import postrouter from "./routes/postroutes.js"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import auth from "./middleware/authentication.js"
import Reviewrouter from "./routes/reviewroutes.js";

dotenv.config();


const app = express();

app.use(bodyParser.json())

Connection(process.env.Mongo_url);

app.get("/", (req,res)=>{
  var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  console.log(seq);
   res.send(seq)
})

app.post("/:token",auth, (req,res)=>{
    const data = req.body
    const {token} = req.params 
   
    res.send({data,token})
})


app.use("/user", userrouter);
app.use("/post", postrouter);
app.use("/review", Reviewrouter);

// Server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
