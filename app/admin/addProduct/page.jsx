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
        authorImage:"/public/author_img.png"
    })
    const onChageHandler=(event)=>{
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
        formData.append('category',data.description);
        formData.append('author',data.author);
        formData.append('authorImg',data.authorImage);
        formData.append('image',image);
        const respone=await axios.post('/app/api/blog',formData);
        if(respone.data.success){
            toast.success(respone.data.msg);
            setImage(false);
            setData({
                title:"",
                description:"",
                category:"Startup",
                author:"Alex Bennet",
                authorImage:"/public/author_img.png"
            });
        }else{
            toast.error('Error');

        }
    }
    return(<div>
        <>
        <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <p className="text-xl">Upload thumbnail</p>
            <label htmlFor="image">
                <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            <p className="text-xl mt-4">Blog title</p>
            <input name='title' onChange={onChageHandler} value={data.title} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Type here" required/>
            <p className="text-xl mt-4">Blog Description</p>
            <textarea name='description' onChange={onChageHandler} value={data.description} className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="write content here" rows={6} required/>
            <p className="text-xl mt-4">Blog category</p>
            <select name="category" onChange={onChageHandler} value={data.category} className="w-40 mt-4 px-4 py-3 border text-gray-500">
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <br/>
            <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">ADD</button>
        </form>
        </>
    </div>
    )
}

export default page