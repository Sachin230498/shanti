import express from "express";
import User_model from "../model/user.model.js";
// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt"

const GetData = (req, res) => {
  res.send("getting it");
};

const Data = (req, res) => {
  res.send("getting DATA");
};

const PostUser = async (req, res) => {
  const { name, email, password, mobile } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(String(password), salt);

    // console.log(hashedPass)


  const newUser = new User_model({ name, email, password:hashedPass, mobile });



  const existingTeacherByMobile = await User_model.findOne({ mobile });

  if (existingTeacherByMobile) {
    return res.status(409).send({ message: "Mobile already exists" });
  }

  await newUser.save();

  res.send({ massage: "User Created", user: newUser });
};

export { GetData, Data, PostUser };
