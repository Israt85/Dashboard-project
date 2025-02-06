import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserProfile =()=>{
    const { id } = useParams();
  const [user, setUser] = useState(null);
console.log('id',id)
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

    return(
        <div>
             <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.suite}, {user.address.street}, {user.address.city}</p>

      <Link to="/allusers" className="text-blue-500 underline">
        ← Back to Users
      </Link>
    </div>
        </div>
    )
}
export default UserProfile;