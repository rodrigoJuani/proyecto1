'use client'
import React,{useState} from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
const page=()=>{
    const [image,setImage]=useState(false);
    return(<div>
        <>
        <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <p className="text-xl">Upload thumbnail</p>
            <label htmlFor="image">
                <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=''/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
            <p className="text-xl mt-4">Blog title</p>
            <input className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="Type here" required/>
            <p className="text-xl mt-4">Blog Description</p>
            <textarea className="w-full sm:w-[500px] mt-4 px-4 py-3 border" type="text" placeholder="write content here" rows={6} required/>
            <p className="text-xl mt-4">Blog category</p>
            <select name="category" className="w-40 mt-4 px-4 py-3 border text-gray-500">
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
        </form>
        </>
    </div>
    )
}

export default page