const express = require("express");
const {
  register,
  login,
  getAllUser,
} = require("../controllers/userController");
const auth  = require("../middleware/authmiddle");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/data", auth, getAllUser);

module.exports = router;
