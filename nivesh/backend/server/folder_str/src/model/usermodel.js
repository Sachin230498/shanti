import mongoose from "mongoose";


const User_Schema = new mongoose.Schema({
    username : {type: String,require:true, unique:true},
    email : {type: String,require:true, unique:true},
    mobile : {type: Number, unique:true},
    password : {type: String,require:true,},
  
})


const User_model = mongoose.model("user", User_Schema)


// console.log(User_model)

export default User_model;

