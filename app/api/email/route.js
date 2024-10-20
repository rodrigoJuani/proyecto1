// pages/api/subscribe.js
import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
const{ NextResponse }=require("next/server");
import{writeFile} from 'fs/promises'
import { title } from "process";

import connectDB from "@/lib/config/db"; // Asegúrate de que la ruta sea correcta
import EmailModel from "@/lib/models/EmailModel"; // Importa el modelo aquí
import { NextResponse } from "next/server";

// Función para cargar la base de datos
const loadDB = async () => {
    await connectDB();
};

// Asegúrate de que la conexión se complete antes de manejar la solicitud
await loadDB();

export async function POST(request) {
    const formData = await request.formData();
    const email = {
        email: formData.get('email'),
    };

    // Validación del email
    if (!email.email) {
        return NextResponse.json({ success: false, msg: "Email es requerido" });
    }

    try {
        await EmailModel.create(email); // Usa el modelo para crear un nuevo registro
        console.log("Email guardado:", email);
        return NextResponse.json({ success: true, msg: "Email Subscribed" });
    } catch (error) {
        console.error("Error al crear el registro:", error);
        return NextResponse.json({ success: false, msg: "Error al suscribir el email" });
    }
}
