import express from "express";
import { GetData,Data,PostUser } from "../controller/user.Controller.js";

const router = express.Router();


// Routes


router.get("/get", GetData)


router.get("/getData", Data)

router.post("/postuser",PostUser )





export default router;