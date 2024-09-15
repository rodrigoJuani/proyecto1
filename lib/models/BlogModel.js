import mongoose from "mongoose";
const Schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
      type:String,
      required:true
    },
    category:{
        type:String,
        required:true
      },
      author:{
        type:String,
        required:true
      },
      image:{
        type:String,
        required:true
      },
      authorImage:{
        type:String,
        required:true
      },
      date:{
        type:Date,
        default:Date.now()
      },
      
      
      
      
      
})