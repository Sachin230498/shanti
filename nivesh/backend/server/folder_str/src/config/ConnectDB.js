import mongoose  from "mongoose";


function Connection(){

const ConnectDB = mongoose.connect("mongodb://localhost:27017/mern3");

ConnectDB.then((res) => {
  console.log("connect to db");
}).catch((err) => {
  console.log(err);
});

}

export default Connection;