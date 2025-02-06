import { Link } from "react-router";

const Home =()=>{
    return(
        <div className="w-full flex flex-col gap-4 justify-center items-center mx-auto h-96">
          <p> Hello World!</p> 
          <Link to='/dashboard/allusers'>
          <p className="w-32 h-10 text-center py-2 rounded-lg bg-red-50">Dashboard</p></Link>
                    </div>
    )
}
export default Home;