import express from "express";
import {
  login,
  viewUsers,
  manageProducts,
} from "../controller/adminController.js";

const router = express.Router();

router.post("/login", login);
router.get("/users", viewUsers);
router.get("/products", manageProducts);

export default router;
