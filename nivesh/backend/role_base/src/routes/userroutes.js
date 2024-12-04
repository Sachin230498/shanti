import express from "express";
import {
  register,
  login,
  GetData,
  updateUser,
  deleteUser,
  getAllUsers,
  dashboard,
  requestPasswordReset,
  resetPassword
} from "../controller/UserController.js";

import authenticateToken from "../middleware/authentication.js"
import { authRole } from "../middleware/authRole.js";



const Userrouter = express.Router();

// Routes

Userrouter.get("/get", GetData);
Userrouter.post("/signup", register);
Userrouter.post("/login", login);
Userrouter.post("/request-password-reset", requestPasswordReset);
Userrouter.post("/reset-password/:token", resetPassword);

Userrouter.get("/dashboard", authenticateToken, dashboard);

// Admin-only routes
Userrouter.get("/admin/users", authenticateToken, authRole("admin"), getAllUsers);


Userrouter.delete(
  "/admin/users/:id",
  authenticateToken,
  authRole("admin"),
  deleteUser
);


Userrouter.put(
  "/admin/users/:id",
  authenticateToken,
  authRole("admin"),
  updateUser
);


export default Userrouter;
