import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://prueba:oRWyDcaHyWdHOZJv@cluster0.3lseb.mongodb.net/blog-app?retryWrites=true&w=majority');
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to DB:", error);
        process.exit(1); // Termina el proceso si no se puede conectar
    }
}

//export const ConnectDB = async () => {
    ///oRWyDcaHyWdHOZJv
    //await mongoose.connect('mongodb+srv://prueba:oRWyDcaHyWdHOZJv@cluster0.3lseb.mongodb.net/blog-app');
    ///await mongoose.connect('mongodb+srv://prueba:oRWyDcaHyWdHOZJv@cluster0.3lseb.mongodb.net/blog-app?retryWrites=true&w=majority');
  //  console.log("DB connected");
//}
///mongodb+srv://prueba:oRWyDcaHyWdHOZJv@cluster0.3lseb.mongodb.net/PROYECT1

