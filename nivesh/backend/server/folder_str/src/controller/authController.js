import express from "express";
import User_model from "../model/usermodel.js";
// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const GetData = (req, res) => {
  res.send("getting it");
};

const register = async (req, res) => {
  try {
    const { username, password, email, mobile } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(String(password), salt);

    const user = new User_model({
      username,
      password: hashedPass,
      email,
      mobile,
    });
    await user.save();

    res
      .status(201)
      .json({ message: "User regiset successfully", userData: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User_model.findOne({ username });

    console.log(req.user)

    if (!user || !(await bcrypt.compare(String(password), user.password))) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      const verified = jwt.verify(token, process.env.JWT_SECRET);

      req.user = verified;

      console.log(req.user)

    res
      .status(200)
      .json({ message: " successfully Login", token, userData: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { GetData, register, login };

// onst Data = (req, res) => {
//   res.send("getting DATA");
// };

// const PostUser = async (req, res) => {
//   const { name, email, password, mobile } = req.body;

//     const salt = await bcrypt.genSalt(10);
//     const hashedPass = await bcrypt.hash(String(password), salt);

//     // console.log(hashedPass)

//   const newUser = new User_model({ name, email, password:hashedPass, mobile });

//   const existingTeacherByMobile = await User_model.findOne({ mobile });

//   if (existingTeacherByMobile) {
//     return res.status(409).send({ message: "Mobile already exists" });
//   }

//   await newUser.save();

//   res.send({ massage: "User Created", user: newUser });
// };
