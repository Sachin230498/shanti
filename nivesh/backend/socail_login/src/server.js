import express from "express"
import userrouter from "./routes/userRoutes.js";
import paymentrouter from "./routes/paymentRoutes.js"
import { ConnectDB } from "./config/connectionDB.js";

// app intilize

const app = express();

app.use(express.json())

ConnectDB()


app.use("/pay", paymentrouter)




// Start the server

let PORT = 8081;

app.listen(PORT, ()=>{
    console.log(`Server is running on  http://localhost:${PORT}`)
})
