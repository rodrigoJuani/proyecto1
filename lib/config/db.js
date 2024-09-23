import mongoose from "mongoose";

export const ConnectDB = async () => {
    ///oRWyDcaHyWdHOZJv
    await mongoose.connect('mongodb+srv://prueba:oRWyDcaHyWdHOZJv@cluster0.3lseb.mongodb.net/blog-app');
    ///await mongoose.connect('mongodb+srv://prueba:oRWyDcaHyWdHOZJv@cluster0.3lseb.mongodb.net/blog-app?retryWrites=true&w=majority');
    console.log("DB connected");
}
///mongodb+srv://prueba:oRWyDcaHyWdHOZJv@cluster0.3lseb.mongodb.net/PROYECT1

