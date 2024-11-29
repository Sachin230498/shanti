import express from "express"
import { CreatePost, GetPosts } from "../controller/PostController.js";
import authenticateToken from "../middleware/authentication.js";
const Postrouter = express.Router();

Postrouter.post("/create", authenticateToken, CreatePost);
Postrouter.get("/get", GetPosts);

export default Postrouter;

