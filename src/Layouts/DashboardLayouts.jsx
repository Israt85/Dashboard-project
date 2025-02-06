import { Link, Outlet } from 'react-router';
import product from '../assets/productssvg.png';
import Drawer from '../Components/Drawer';
const DashboardLayouts =()=>{

    return(
        <div className="w-full flex">
            <Drawer></Drawer>
            <div className="w-60 hidden lg:block bg-green-50 h-[900px]">
 {/* users */}
<Link to='allusers'>
<p className=" w-32 rounded-lg flex justify-start px-4 mt-16 gap-2 items-center mx-auto my-6 h-10 border">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="#475569" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" stroke="#475569" stroke-width="2" stroke-linejoin="round"/>
<path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" stroke="#475569" stroke-width="2"/>
</svg>

Users
 </p></Link>

 {/* All products */}
<Link to='allproducts'>
<p className=" w-32 rounded-lg flex justify-start px-4 gap-2 items-center mx-auto my-6 h-10 border">
 <img className='w-6 h-6' src={product} alt="" />

Products
 </p></Link>

            </div>
            <div className="w-full bg-red-50 h-[900px]">
                 <Outlet></Outlet>
            </div>
        </div>
    )
}
export default DashboardLayouts;