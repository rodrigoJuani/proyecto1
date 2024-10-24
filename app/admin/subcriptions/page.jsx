'use client'
import SubsTableItem from "@/Components/AdminComponents/SubsTableItem";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";

const page=()=>{


    const [emails,setEmails]=useState([]);
    
    const fetchEmails = async () => {
        try {
            const response = await axios.get('/api/email');
            console.log(response.data); // Verifica la respuesta aquí
            setEmails(response.data.emails);
        } catch (error) {
            console.error("Error fetching emails:", error);
        }
    };
    

    const deleteEmail=async(mongoId)=>{
        const response=await axios.delete('/api/email',{
            params:{
                id:mongoId
            }
        })
        if(response.data.success){
            toast.success(response.data.msg);
            fetchEmails();
        }else{
            toast
        }
    }
    useEffect(()=>{
        fetchEmails();
    },[])
    return(
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
        <h1>All Subscription</h1>
        <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
            <table className="w-full text-sm text-black">
                <thead className="text-xs text-left text-black uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Suscripción por correo electrónico
                        </th>
                        <th scope="col" className="hidden  sm:block px-6 py-3">
                            Dato
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                {emails.map((item, index) => {
                        return <SubsTableItem key={index} mongoId={item._id} deleteEmail={deleteEmail} email={item.email} date={item.date} />;
})}

                    
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default page