import { useEffect, useState } from "react";
import Popularcard from "./Popularcard";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Popular = () => {
    const [item,setItem]=useState([]);
 useEffect(()=>{
    fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
    .then(res=>res.json())
    .then(data=>setItem(data.Items))
 },[])
 
 const popular = item.filter(item => item.IsRecommended === true);
    return (
        <div className="md:max-w-screen-xl mx-10 px-10 mt-10" >
            <div className="flex justify-between">
            <h2 className="mb-3 text-lg ">Popular</h2>
           <Link to='/add'> <button className="text-x-sm btn p-2 m-2 text-white bg-orange-400">Add More <IoIosArrowForward></IoIosArrowForward> </button></Link>
            </div>
       <div className=" hidden lg:flex lg:flex-cols-5  gap-2">
        
       {
        item.slice(0,5).map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
       </div>
       <div className=" lg:hidden  grid grid-cols-3  gap-2">
        
       {
        item.slice(0,3).map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
       </div>
       <div className="flex justify-between ">
            <h2 className="mb-3 text-lg ">Recommended</h2>
            <button className="text-x-sm btn p-2 m-2 text-white bg-orange-400">Add More <IoIosArrowForward></IoIosArrowForward> </button>
            </div>
      <div className="hidden lg:flex flex-cols-5 md:max-w-screen-xl  gap-2">
      {
        popular.slice(0,5) .map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
      </div>
      <div className=" lg:hidden  grid grid-cols-3  gap-2">
        
       {
        popular.slice(0,3).map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
       </div>
        </div>
    );
};

export default Popular;