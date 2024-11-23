import mongoose  from "mongoose";



function Connection(mongo_url){

const ConnectDB = mongoose.connect(mongo_url);

ConnectDB.then((res) => {
  console.log("connect to db");
}).catch((err) => {
  console.log(err);
});

}

export default Connection;