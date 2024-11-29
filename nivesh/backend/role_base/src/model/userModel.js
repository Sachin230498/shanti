import mongoose from "mongoose";


const User_Schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, unique: true, required: true },
});


const User_model = mongoose.model("User", User_Schema)


// console.log(User_model)

export default User_model;

