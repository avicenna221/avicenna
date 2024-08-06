// lib/mongodb.js
import mongoose from "mongoose";
 const mongodb_URI =
  "mongodb://avicenna:avicenna@ac-v8at4wc-shard-00-00.cre3lvh.mongodb.net:27017,ac-v8at4wc-shard-00-01.cre3lvh.mongodb.net:27017,ac-v8at4wc-shard-00-02.cre3lvh.mongodb.net:27017/avicenna?ssl=true&replicaSet=atlas-nm354x-shard-0&authSource=admin&retryWrites=true&w=majority&appName=avicenna";
// mongodb.js

const connect = async()=>{
  const connectionState= mongoose.connection.readyState;
  if(connectionState===1){
    console.log("already connected");
    return;
  }
  if(connectionState===2){
    console.log("connecting...");
    return;
  }
  try{
    mongoose.connect(mongodb_URI,{
      dbName:"avicenna",
      bufferCommands:true,
    });
    console.log("connected");
  }
  catch(error){
    console.log("error in connectind database",error);
    throw new Error("Error connecting to database");
  }
}
export default connect;