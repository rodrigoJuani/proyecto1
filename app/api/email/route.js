import { NextResponse } from "next/server";
import connectDB from "@/lib/config/db"; 
import EmailModel from "@/lib/models/EmailModel"; 

const loadDB = async () => {
    await connectDB();
};

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

