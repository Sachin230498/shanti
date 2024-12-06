import Admin from "../models/adminModel.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
// Admin Login (Assume admin is pre-registered for simplicity)
const login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || admin.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ admin });
};

// View All Users
const viewUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Manage Products
const manageProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
 
export { login, viewUsers, manageProducts };
