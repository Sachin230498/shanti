import express from "express";
import { GetData,register,login } from "../controller/authController.js";

const router = express.Router();

// Routes

router.get("/get", GetData);
router.post("/register",register );
router.post("/login", login);






export default router;
