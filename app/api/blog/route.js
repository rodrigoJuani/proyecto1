import { ConnectDB } from "@/lib/config/db"

const{ NextResponse }=require("next/server")
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

    const image=FormData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timestamp}`
}