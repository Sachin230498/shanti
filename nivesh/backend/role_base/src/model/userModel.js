import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  otp: { type: String }, // Temporary OTP
  otpExpiry: { type: Date }, // OTP expiration timestamp
});


const User_model = mongoose.model("User", userSchema)


// console.log(User_model)

export default User_model;

