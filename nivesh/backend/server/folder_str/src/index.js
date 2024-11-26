import express from "express";
import Connection from "./config/ConnectDB.js";
import User from "./model/usermodel.js";
import router from "./routes/userroutes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authMiddle from "./middleware/autheMiddle.js"

dotenv.config();


const app = express();

app.use(bodyParser.json())

Connection(process.env.Mongo_url);


app.get("/data", authMiddle, (req,res)=>{
  res.send("data is fatched")
})


app.post("/create", authMiddle,(req,res)=>{
  const data = req.body;
  res.json(data)
})


app.use("/user", router);

// Server
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
