import React from "react";
const SubsTableItem=({email})=>{
    return(
        <tr className="bg-white border-b text-left">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {email?email:"No email"}
            </th>
            <td className="px-6 py-4 hidden sm:block">{"11 Jan 2024"}</td>
            <td className="px-6 py-4 cursor-pointer">x</td>
        </tr>
    )
}
export default SubsTableItem