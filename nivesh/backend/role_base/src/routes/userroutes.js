import express from "express";
import { register, login, GetData } from "../controller/UserController.js";

const Userrouter = express.Router();

// Routes

Userrouter.get("/get", GetData);
Userrouter.post("/signup", register);
Userrouter.post("/login", login);

export default Userrouter;
