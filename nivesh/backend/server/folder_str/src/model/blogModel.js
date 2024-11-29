import mongoose from "mongoose";

const Blog_Schema = new mongoose.Schema({
  Title: { type: String, require: true, unique: true },
  Description: { type: String, require: true,  },
 

});

const blogModel = mongoose.model("user", User_Schema);

// console.log(User_model)

export default blogModel;
