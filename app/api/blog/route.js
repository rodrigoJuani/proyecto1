const{ NextResponse }=require("next/server")
export async function GET(request) {
    console.log("Blog Get Hit");
    return NextResponse.json({msg:"API working"})
}