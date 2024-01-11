import { useEffect, useState } from "react";
import Popularcard from "./Popularcard";


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
            <h2 className="mb-3 text-lg ">Popular</h2>
       <div className=" hidden lg:flex lg:flex-cols-5  gap-2">
        
       {
        item.slice(0,5).map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
       </div>
       <div className=" lg:hidden  grid grid-cols-3  gap-2">
        
       {
        item.slice(0,5).map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
       </div>
       <h2 className="mb-3 mt-5 text-lg ">Recommended</h2>
      <div className="hidden lg:flex flex-cols-5 md:max-w-screen-xl mt-10 gap-2">
      {
        popular.slice(0,5) .map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
      </div>
      <div className=" lg:hidden  grid grid-cols-3  gap-2">
        
       {
        popular.slice(0,5).map(Items=><Popularcard key={Items.Id} Items={Items}></Popularcard>)
       }
       </div>
        </div>
    );
};

export default Popular;