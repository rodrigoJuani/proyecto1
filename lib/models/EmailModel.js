import mongoose from "mongoose";
import { tree } from "next/dist/build/templates/app-page";

const Schema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
    },
    date:{
        type:Date,
        default:Date.now()
    },
});

const EmailModel= mongoose.models.email || mongoose.model('email',Schema);
connectDB();
export default EmailModel;