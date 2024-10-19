import { ConnectDB } from "@/lib/config/db"; // Asegúrate de que esta función esté correctamente definida
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

// Función para cargar la base de datos
const LoadDB = async () => {
    try {
        await ConnectDB();
        console.log("Conexión a la base de datos establecida");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw new Error("No se pudo conectar a la base de datos");
    }
};

// Asegúrate de que la conexión se complete antes de manejar la solicitud
await LoadDB();

export async function POST(request) {
    const formData = await request.formData();
    const email = {
        email: formData.get('email'), // No es necesario usar template literals aquí
    };

    // Validación del email
    if (!email.email) {
        return NextResponse.json({ success: false, msg: "Email es requerido" });
    }

    try {
        await EmailModel.create(email);
        console.log("Email guardado:", email);
        return NextResponse.json({ success: true, msg: "Email Subscribed" });
    } catch (error) {
        console.error("Error al crear el registro:", error);
        return NextResponse.json({ success: false, msg: "Error al suscribir el email" });
    }
}

