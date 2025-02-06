import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserProfile =()=>{
    const { id } = useParams();
  const [user, setUser] = useState(null);
console.log('id',id)
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) =>{ console.log(data)
                        setUser(data)
      });
  }, [id]);

    return(
        <div className="w-full text-white h-96 mx-10">
            <div className="w-full mt-6 flex flex-col lg:flex-row justify-center items-center mx-auto">
            <div className="w-28 h-28 flex justify-center items-center rounded-full bg-[#D9D9D9]">
             <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.0832 33.5838C48.398 33.5838 47.7409 33.856 47.2565 34.3404C46.772 34.8249 46.4998 35.482 46.4998 36.1671V37.1488L42.6765 33.3255C41.3265 31.9861 39.5019 31.2346 37.6003 31.2346C35.6986 31.2346 33.874 31.9861 32.524 33.3255L30.7157 35.1338L24.309 28.7271C22.9401 27.4241 21.1226 26.6974 19.2328 26.6974C17.3429 26.6974 15.5254 27.4241 14.1565 28.7271L10.3332 32.5505V18.0838C10.3332 17.3987 10.6053 16.7416 11.0898 16.2571C11.5743 15.7726 12.2314 15.5005 12.9165 15.5005H30.9998C31.685 15.5005 32.3421 15.2283 32.8265 14.7438C33.311 14.2594 33.5832 13.6023 33.5832 12.9171C33.5832 12.232 33.311 11.5749 32.8265 11.0904C32.3421 10.606 31.685 10.3338 30.9998 10.3338H12.9165C10.8611 10.3338 8.88983 11.1503 7.43643 12.6037C5.98302 14.0571 5.1665 16.0284 5.1665 18.0838V49.0838C5.1665 51.1392 5.98302 53.1105 7.43643 54.5639C8.88983 56.0173 10.8611 56.8338 12.9165 56.8338H43.9165C45.9719 56.8338 47.9432 56.0173 49.3966 54.5639C50.85 53.1105 51.6665 51.1392 51.6665 49.0838V36.1671C51.6665 35.482 51.3943 34.8249 50.9099 34.3404C50.4254 33.856 49.7683 33.5838 49.0832 33.5838ZM12.9165 51.6671C12.2314 51.6671 11.5743 51.395 11.0898 50.9105C10.6053 50.426 10.3332 49.7689 10.3332 49.0838V39.8613L17.8248 32.3696C18.2044 32.008 18.7085 31.8062 19.2328 31.8062C19.757 31.8062 20.2612 32.008 20.6407 32.3696L28.8298 40.5588L39.9382 51.6671H12.9165ZM46.4998 49.0838C46.4943 49.578 46.3314 50.0576 46.0348 50.453L34.384 38.7505L36.1923 36.9421C36.3775 36.7531 36.5986 36.6029 36.8426 36.5004C37.0866 36.3979 37.3485 36.3451 37.6132 36.3451C37.8778 36.3451 38.1398 36.3979 38.3838 36.5004C38.6277 36.6029 38.8488 36.7531 39.034 36.9421L46.4998 44.4596V49.0838ZM58.6673 11.083L50.9173 3.33296C50.6717 3.09778 50.3819 2.91342 50.0648 2.79046C49.4359 2.53208 48.7304 2.53208 48.1015 2.79046C47.7844 2.91342 47.4947 3.09778 47.249 3.33296L39.499 11.083C39.0126 11.5694 38.7393 12.2292 38.7393 12.9171C38.7393 13.6051 39.0126 14.2648 39.499 14.7513C39.9855 15.2377 40.6452 15.511 41.3332 15.511C42.0211 15.511 42.6809 15.2377 43.1673 14.7513L46.4998 11.393V25.8338C46.4998 26.5189 46.772 27.176 47.2565 27.6605C47.7409 28.145 48.398 28.4171 49.0832 28.4171C49.7683 28.4171 50.4254 28.145 50.9099 27.6605C51.3943 27.176 51.6665 26.5189 51.6665 25.8338V11.393L54.999 14.7513C55.2392 14.9934 55.5249 15.1856 55.8397 15.3168C56.1545 15.4479 56.4921 15.5154 56.8332 15.5154C57.1742 15.5154 57.5119 15.4479 57.8267 15.3168C58.1415 15.1856 58.4272 14.9934 58.6673 14.7513C58.9095 14.5111 59.1017 14.2254 59.2328 13.9106C59.364 13.5958 59.4315 13.2582 59.4315 12.9171C59.4315 12.5761 59.364 12.2384 59.2328 11.9236C59.1017 11.6088 58.9095 11.3231 58.6673 11.083Z" fill="#4A4A4A"/>
</svg>
 </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
            <input className="w-64 h-8 rounded-lg p-2 my-10 bg-black" type="text" placeholder="Name" defaultValue={user?.name} />
             <input className="w-64 h-8 rounded-lg p-2 my-10 bg-black" type="text" placeholder="Name" defaultValue={user?.username} />

            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
            <input className="w-64 h-8 rounded-lg p-2 my-10 bg-black" type="text" placeholder="Email" defaultValue={user?.email} />
             <input className="w-64 h-8 rounded-lg p-2 my-10 bg-black" type="text" placeholder="Address" defaultValue={user?.address?.city} />

            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6">
            <input className="w-64 h-8 rounded-lg p-2 my-10 bg-black" type="text" placeholder="Phone" defaultValue={user?.phone} />
             <input className="w-64 h-8 rounded-lg p-2 my-10 bg-black" type="text" placeholder="Company" defaultValue={user?.company?.name} />

            </div>
        </div>
    )
}
export default UserProfile;