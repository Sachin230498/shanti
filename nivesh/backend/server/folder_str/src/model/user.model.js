import mongoose from "mongoose";


const User_Schema = new mongoose.Schema({
    name : {type: String},
    email : {type: String},
    mobile : {type: Number, unique:true},
    password : {type: String},
    complete : {type:Boolean, default:false}
})


const User_model = mongoose.model("user", User_Schema)


// console.log(User_model)

export default User_model;

