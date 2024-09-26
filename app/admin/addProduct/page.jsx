'use client'
import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
const page=()=>{
    return(<div>
        <>
        <form className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <p className="text-xl">Upload thumbnail</p>
            <label htmlFor="">
                <Image className='mt-4' src={assets.upload_area} width={140} height={70} alt=''/>
            </label>
        </form>
        </>
    </div>
    )
}

export default page