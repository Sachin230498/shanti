import express from "express";
import Connection from "./config/ConnectDB.js";
import User from "./model/user.model.js";
import router from "./routes/user.routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();


const app = express();

app.use(bodyParser.json())

Connection(process.env.Mongo_url);


app.use("/user", router);

// Server
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
