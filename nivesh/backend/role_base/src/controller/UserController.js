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
        const { username, password,email,mobile } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(String(password), salt);
        const user = new User_model({ username, password:hashedPass,mobile,email });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
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
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};





export {register,login ,GetData}





// const Data = (req, res) => {
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
