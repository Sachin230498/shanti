import express from "express";
import { PostReview, GetReview } from "../controller/ReviewController.js";
import authenticateToken from "../middleware/authentication.js";

const Reviewrouter = express.Router();

Reviewrouter.post("/:postId/reviews", authenticateToken, PostReview);
Reviewrouter.get("/:postId/reviews", GetReview);

export default Reviewrouter;

