import mongoose from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://juan:<db_password>@cluster0.y3pwj.mongodb.net/blog-app');
    console.log("DB connected");
}