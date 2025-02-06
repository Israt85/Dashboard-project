import { useEffect, useState } from "react";
import { Link } from "react-router";
import AddProduct from "./AddProduct";

const Table2 =()=>{
    const [users, setUsers]= useState();
    useEffect(()=>{
        fetch('https://api.restful-api.dev/objects')
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setUsers(data)
        })
    },[])
    return(
        <div>
            <div className="  flex justify-end">
<p className="w-40 border border-red-500 rounded-lg  h-10 flex gap-2 justify-center items-center text-red-500 ">
<svg width="28" height="28" viewBox="0 0 36 36" fill="red" xmlns="http://www.w3.org/2000/svg">
<path d="M35.3587 18.9193L27.5625 15.321V5.0111C27.5589 4.7948 27.4934 4.5841 27.3737 4.4041C27.254 4.2241 27.0852 4.08241 26.8875 3.99591L18.45 0.104312C18.3019 0.0355937 18.1407 0 17.9775 0C17.8143 0 17.6531 0.0355937 17.505 0.104312L9.0675 3.99591C8.87222 4.08652 8.70695 4.23138 8.5913 4.41332C8.47565 4.59526 8.41446 4.80663 8.415 5.02238V15.3323L0.652503 18.9193C0.457226 19.0099 0.291962 19.1548 0.17631 19.3367C0.0606587 19.5187 -0.000529002 19.73 3.44558e-06 19.9458V30.9776C-0.000529002 31.1934 0.0606587 31.4047 0.17631 31.5867C0.291962 31.7686 0.457226 31.9135 0.652503 32.0041L9.09 35.8957C9.23809 35.9644 9.39931 36 9.5625 36C9.72568 36 9.8869 35.9644 10.035 35.8957L18 32.2184L25.965 35.8957C26.1131 35.9644 26.2743 36 26.4375 36C26.6007 36 26.7619 35.9644 26.91 35.8957L35.3475 32.0041C35.5428 31.9135 35.708 31.7686 35.8237 31.5867C35.9393 31.4047 36.0005 31.1934 36 30.9776V19.9458C36.0015 19.7313 35.942 19.5208 35.8284 19.3389C35.7148 19.1571 35.5519 19.0116 35.3587 18.9193ZM26.4487 22.574L20.7 19.9458L26.4487 17.295L32.1975 19.9458L26.4487 22.574ZM25.3237 15.3097L18.0787 18.6937V10.0194C18.2143 10.0134 18.3477 9.98283 18.4725 9.92917L25.3125 6.78206V15.3323L25.3237 15.3097ZM18 2.36031L23.7487 5.0111L18 7.6619L12.2625 5.0111L18 2.36031ZM9.5625 17.2837L15.3112 19.9345L9.5625 22.574L3.81375 19.9458L9.5625 17.2837ZM16.875 30.2444L9.5625 33.6284V24.9541C9.7195 24.9447 9.8728 24.9025 10.0125 24.83L16.8525 21.6716L16.875 30.2444ZM33.75 30.2444L26.4825 33.6284V24.9541C26.6241 24.9388 26.7615 24.8967 26.8875 24.83L33.7275 21.6716L33.75 30.2444Z" fill="red"/>
</svg>
<AddProduct></AddProduct>
</p>

            </div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Details</th>
        <th>Capacity</th>
      </tr>
    </thead>
    <tbody>
    {
        users?.map(user=> 
<tr key={user.id} className="hover:bg-gray-100">
        <th>{user?.id}</th>
        <td>{user?.name}</td>
        <td>{user?.data?.color}</td>
        <td>{user?.data?.price}</td>

      </tr>
        )
    }
      
    </tbody>
  </table>
</div>
        </div>
    )
}
export default Table2;