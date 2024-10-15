
export async function POST(request) {
    const formData=await request.formData();
    const email={
        email:`${formData.get('email')}`
    }
}
