import express from "express";
import Connection from "./config/ConnectDB.js";
import User from "./model/user.model.js";
import router from "./routes/user.routes.js";
import bodyParser from "body-parser";

// Initialize app
const app = express();

app.use(bodyParser.json())

Connection();

// console.log(router)

app.use("/user", router);

// Server
const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
