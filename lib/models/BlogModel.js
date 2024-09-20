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
      }
})
///const mongoose = require('mongoose');
///delete mongoose.models.blog;
const BlogModel=mongoose.models.blog || mongoose.model('blog',Schema);
export default BlogModel;