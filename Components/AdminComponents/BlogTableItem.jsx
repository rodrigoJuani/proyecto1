import react from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
const BlogTableItem=({authorImg,title})=>{
    return(
        <tr className="bg-white border-b">
            <th scope='row' className="items-center gap-3 hidden sm:flex px-6 py-4 font medium text-gray-900 whitespace-nowrap">
                <Image src={authorImg?authorImg:assets.profile_icon}/>
            </th>
            <td className="px-6 py-4">
                {title?title:"no title"}
            </td>
            <td className="px-6 py-4">
                {"11 jan 2024"}
            </td>
            <td className="px-6 py-4">
                x
            </td>
        </tr>
    )
    

}
export default BlogTableItem