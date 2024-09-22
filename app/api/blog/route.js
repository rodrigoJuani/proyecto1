import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
const{ NextResponse }=require("next/server");
import{writeFile} from 'fs/promises'
import { title } from "process";
const  LoadDB=async()=>{
    await ConnectDB();
}
LoadDB();
export async function GET(request) {
    return NextResponse.json({msg:"API working"})
}
export async function POST(request) {
    const formData=await request.formData();
    const timestamp=Date.now();

    const image=formData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}`;
    
    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`
    }
    fetch('http://localhost:3000/api/blog', {
        method: 'POST',
        body: formData,
        // No es necesario establecer Content-Type, el navegador lo hará automáticamente
    })
    .then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
    await BlogModel.create(blogData);
    console.log("Blog saved");
    return NextResponse.json({success:true,msg:"Blog Added"})
}