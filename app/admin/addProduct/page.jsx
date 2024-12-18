'use client'
import React,{useState} from "react";
import axios from "axios";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import { toast } from "react-toastify";
const page=()=>{
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        title:"",
        description:"",
        category:"Startup",
        author:"Alex Bennet",
        authorImage:"/author_img.png"
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
        console.log(data);
    }
    const onSubmitHandler=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('category',data.category);
        formData.append('author',data.author);
        formData.append('authorImage',data.authorImage);///Posible????????'authorImg'(cam->LOARRUINA)
        formData.append('image',image);
        const response=await axios.post('/api/blog',formData);
        if(response.data.success){
            toast.success(response.data.msg);
            setImage(false);
            setData({
                title:"",
                description:"",
                category:"Startup",
                author:"Alex Bennet",
                authorImage:"/author_img.png"
            });
        }else{
            toast.error('Error');
        }
    }
    return(<div>
        <>
        <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <p className="text-xl">Imagen para subir</p>
            <label htmlFor="image">
                <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            <p className="text-xl mt-4">Titulo del Blog</p>
            <input name='title' onChange={onChangeHandler} value={data.title} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Escribe Aqui " required/>
            <p className="text-xl mt-4">Descripción del Blog</p>
            <textarea name='description' onChange={onChangeHandler} value={data.description} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="<h1>Titulo</h1> <p>Contenido</p>" rows={6} required/>
            <p className="text-xl mt-4">Categoría del Blog</p>
            <select name="category" onChange={onChangeHandler} value={data.category} className="w-40 mt-4 px-4 py-3 border text-gray-500">
                <option value="Startup">Hobbies</option>
                <option value="Technology">Tecnologia</option>
                <option value="Lifestyle">Estilos de vida</option>
            </select>
            <br/>
            <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">ADICIÓN</button>
        </form>
        </>
    </div>
    )
}

export default page