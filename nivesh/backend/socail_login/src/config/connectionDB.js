import mongoose, { connect } from "mongoose";



export function ConnectDB(){
   const Connect =  mongoose.connect("mongodb://localhost:27017/newDB");
   Connect.then((req,res)=>{
       console.log("connect to db")
   }).catch(err=>{
    console.log(err)
   })
}

