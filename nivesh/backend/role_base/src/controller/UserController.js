import express from "express";
import User_model from "../model/userModel.js";
// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const GetData = (req, res) => {
  res.send("getting it");

  console.log(process.env.JWT_SECRET)
};



// Register User
const register =  async (req, res) => {
    try {
        const { username, password,role } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(String(password), salt);
        const user = new User_model({ username, password:hashedPass,role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login User
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User_model.findOne({ username });
        if (!user || !(await bcrypt.compare(String(password), user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ _id: user._id, role:user.role}, process.env.JWT_SECRET);
        res.json({ token ,user:user.role});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Admin: Get all users
 const getAllUsers = async (req, res) => {
  try {
    const users = await User_model.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Admin: Delete a user
 const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User_model.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Admin: Update a user
 const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, role } = req.body;

  try {
    const user = await User_model.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.username = username || user.username;
    user.role = role || user.role;

    await user.save();
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


const dashboard = (req, res) => {
  res.json({ message: `Welcome ${req.user.role} to the dashboard!` });
};





export {register,login ,GetData,updateUser,deleteUser,getAllUsers,dashboard}



