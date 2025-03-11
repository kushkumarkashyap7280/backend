
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path : './env'
});



connectDB();


















// import express from "express";
// const app = express();

// (async ()=>{
//   try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//    app.on('error',(error)=>{
//      console.error("Error connecting to MongoDB", error);
//      throw new Error("Error connecting to MongoDB - " + error.message);
//    });

//    app.listen(process.env.PORT,()=>{
//      console.log(`Server running on port ${process.env.PORT}`)});
    
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//     throw new Error("Failed to connect to MongoDB " + error.message);
    
//   }
// })();