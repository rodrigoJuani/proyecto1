import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
    const [emailData, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", emailData);
        
        try {
            // Cambia la URL a la ruta correcta de tu API
            const response = await axios.post('api/email', formData);
            if (response.data.success) {
                toast.success(response.data.msg);
                setEmail("");
            } else {
                toast.error("Error");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            toast.error("Error en la solicitud");
        }
    }
    
    return (
        <div className="py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get started<Image src={assets.arrow}/></button>
            </div>
            <div className="text-center my-8">
              <h1 className="text-3xl sm:text-5xl font-medium">Los ultimos blogs</h1>
              <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Bienvenido a nuestra página de blogs simples, donde la claridad y la accesibilidad son nuestra prioridad. Aquí, los lectores pueden explorar una variedad de artículos escritos de manera directa y fácil de entender, ideales para aquellos que buscan contenido sin complicaciones.</p>
              <form onSubmit={onSubmitHandler} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]" action="">
                 <input onChange={(e) => setEmail(e.target.value)} value={emailData} type="email" placeholder='Enter your email' className="pl-4 outline-none"/>
                 <button type="submit" className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
                    Suscribir
                 </button>
              </form>
            </div>
        </div>
    )
}

export default Header;
