import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true}
})

const userModel = new mongoose.model("user", userSchema)


export default userModel;