import express from "express"
import userModel from "../model/userScema.js"

const login = (req,res)=>{
    res.send("login")
}




const signup = async (req,res)=>{
   const {name,password} = req.body

   const data = new userModel({name,password})

   await data.save()


   res.send({data,msg:"user created"})
}

export {login,signup}