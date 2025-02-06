import { useEffect, useState } from "react";
import { Link } from "react-router";

const Table1 =()=>{
    const [users, setUsers]= useState();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setUsers(data)
        })
    },[])
    return(
        <div>
<div className="overflow-x-auto">
  <table className="table bg-gray-50 rounded-lg mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th>SL</th>
        <th>Name</th>
        <th>Email</th>
        <th>City Name</th>
      </tr>
    </thead>
    <tbody>
    {
        users?.map(user=> 
<tr key={user.id} className="hover:bg-gray-100">
        <th>{user?.id}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.address?.city}</td>
        <Link to={`/dashboard/user/${user.id}`}>View Profile</Link>

      </tr>
        )
    }
      
    </tbody>
  </table>
</div>
        </div>
    )
}
export default Table1;