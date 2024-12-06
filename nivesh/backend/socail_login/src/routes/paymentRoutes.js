import payment from "../controller/paymentController.js";
import express from "express";

const router = express.Router();

router.post("/payment", payment);


export default router;

