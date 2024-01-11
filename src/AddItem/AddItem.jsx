import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AddItem = () => {
    const { register, handleSubmit,reset ,formState: {errors}} = useForm();
   
   const [item,setItem]=useState([]);
   useEffect(()=>{
      fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
      .then(res=>res.json())
      .then(data=>setItem(data.Items))
   },[])

   const onSubmit =(data) => { 
   
   const newData = { ...data, Id: item.length + 1 }; // Assign a unique ID

   // Using the functional form of setExistingData to update based on previous state
   setItem(prevData => [...prevData, newData]);
   
   
   
   reset()
   Swal.fire({
    position: 'center',
    icon: 'success',
    title: `${data.name} added successfully`,
    showConfirmButton: false,
    timer: 1500
})
   
   
    // 
    
}
    
    return (
        <div className="flex flex-col items-center justify-center" >
            <h2 className="text-3xl font-bold mb-2">Add Food</h2>
           <form className="bg-orange-300 p-10 rounded md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                            {errors.name && (
                <span className="text-red-500 text-lg talic">
                    This field is required
                </span>
            )}
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Popular</option>
                                <option value="pizza">Recommended</option>
                                
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                                 {errors.price && (
                <span className="text-red-500 text-lg talic">
                    This field is required
                </span>
            )}
                        </div>

                    </div>
                   

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: false })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn flex justify-center items-center bg-orange-600">
                        Add Item 
                    </button>
                </form>
        </div>
    );
};

export default AddItem;