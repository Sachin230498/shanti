import express from "express";
import User_model from "../model/userModel.js";
// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../middleware/sendEmail.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sachinpathe123b@gmail.com",
    pass: "zwwzkhfkaxmkonzv",
  },
  tls: {
    rejectUnauthorized: false, // Allows self-signed certificates
  },
});

// Register User
const register = async (req, res) => {
  try {
    const { username, password, role, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(String(password), salt);
    const user = new User_model({
      username,
      password: hashedPass,
      role,
      email,
    });
    await user.save();

    const mailOptions = {
      from: "",
      to: email,
      subject: `Sign Up Successfull`,
      html: `<h1>${username} Account Sign Up Successfull  </h1>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("ERROR", err);
      } else {
        console.log("EMAIL SEND" + info.response);
        return res.status(201).send(`user created successfully,${username}`);
      }
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User_model.findOne({ username });
    if (!user || !(await bcrypt.compare(String(password), user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP: ", otp);

    // Store OTP temporarily in the database
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    await user.save();

    const mailOptions = {
      from: "your-email@gmail.com",
      to: user.email,
      subject: `Your Login OTP`,
      html: `<p>Hello ${user.username},</p>
             <p>Your OTP for login is: <strong>${otp}</strong></p>
             <p>This OTP is valid for 10 minutes.</p>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email: ", err.message);
        return res.status(500).json({ message: "Error sending OTP email" });
      }
      console.log("Email sent: ", info.response);
      res.status(200).json({ message: "OTP sent to your email" });
    });
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

const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User_model.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });
    //  console.log(user.username)
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const resetLink = `http://localhost:8082/user/reset-password/${resetToken}`;
    const htmlContent = `<p>Hello,</p>
      <p>You requested to reset your password. Please click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>`;

    await sendEmail(user.email, "Password Reset Request", htmlContent);

    res.json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Reset password
const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await User_model.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(String(newPassword), salt);

    user.password = hashedPass;
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid or expired token", error: error.message });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { username, otp } = req.body;

    // Find the user in the database
    const user = await User_model.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if the OTP matches and is still valid
    if (!user.otp || user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // OTP is valid, generate a JWT token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expiry
    );

    // Clear the OTP and expiry from the database
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    res.status(200).json({ token, message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  register,
  login,
  updateUser,
  deleteUser,
  getAllUsers,
  dashboard,
  requestPasswordReset,
  resetPassword,
  verifyOtp,
};
