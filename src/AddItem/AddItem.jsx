import { useRef } from "react";
import { useForm } from "react-hook-form";
 import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const AddItem = () => {
    const { register,reset, formState: { errors } } = useForm();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e)
           
                //console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Send Message Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset(); 
            
    };
    // const { register, handleSubmit} = useForm();
    // const form = useRef();
    // const onSubmit =(e) => {
    //     e.preventDefault();
    //     console.log(e)
    //     const imageFile = { image: data.image[0] }
    //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
     
    //     });
    //     if (res.data.success) {
    //      // now send the menu item data to the server with the image url
    //      const menuItem = {
    //          name: data.name,
    //          category: data.category,
    //          price: parseFloat(data.price),
    //          recipe: data.recipe,
    //          image: res.data.data.display_url
    //      }
    //      // 
    //      const menuRes = await axiosSecure.post('/menu', menuItem);
    //      console.log(menuRes.data)
    //      if(menuRes.data.insertedId){
    //          // show success popup
    //          reset();
    //          Swal.fire({
    //              position: "top-end",
    //              icon: "success",
    //              title: `${data.name} is added to the menu.`,
    //              showConfirmButton: false,
    //              timer: 1500
    //            });
    //      }
     
    //  }
        //  }
    return (
        <div>
        <div name="contact" className=' pb-8 md:pb-0 py-20 '>

       

<div className="max-w-screen-lg lg:mx-auto items-center justify-center  lg:mt-20">




<form
ref={form} onSubmit={sendEmail}
    
    className="col-span-7 bg-orange-300 p-6 rounded-lg border border-sec-color lg:mx-0 mx-8 lg:mt-0 mt-10"
    
>
    <div className="form-control">
        <label className="label">
            <span className="">Name</span>
        </label>
        <input
            type="text"
            placeholder="Name" 
            
            // name="Name"
            {...register("Name", { required: true })}
            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
        />
        {errors.name && (
            <span className="text-red-500 text-xs italic">
                This field is required
            </span>
        )}
    </div>
    <div className="form-control">
        <label className="label">
            <span className="">Price</span>
        </label>
        <input
            type="number"
            placeholder="Price" 
            // name="Price"
            {...register("Price", { required: true })}
            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
        />
        {errors.Price && (
            <span className="text-red-500 text-xs italic">
                This field is required
            </span>
        )}
    </div>

    <div className="form-control">
        <label className="label">
            <span className="">Message</span>
        </label>
        <textarea
            {...register("message", { required: true })} 
            // name="message"
            className="border border-sec-color rounded-md py-3 px-5 bg-white text-black focus:border-main-color focus:outline-none"
            cols={30}
            rows={4}
            placeholder="Write your message"
        ></textarea>
        {errors.message && (
            <span className="text-red-500 text-xs italic">
                This field is required
            </span>
        )}
    </div>

    <button className="btn bg-orange-400">
                     Add Item <FaUtensils className="ml-4"></FaUtensils>
                 </button>
</form>
</div>
<div className="h-14 w-full bg-transparent"></div>

</div>
    </div>
        // <div className="items-center">
        //     <h2 className="text-2xl items-center flex justify-center text-orange-400">ADD FOOD</h2>
        //     <div className="w-1/2 ml-20 px-10 items-center align-middle flex justify-center">
        //         <form onSubmit={handleSubmit()}>
        //             <div className="form-control w-full my-6">
        //                 <label className="label">
        //                     <span className="label-text">Name*</span>
        //                 </label>
        //                 <input
        //                     type="text"
        //                     placeholder="Recipe Name"
        //                     {...register('name', { required: true })}
        //                     required
        //                     className="input input-bordered w-full" />
        //             </div>
        //             <div className="flex gap-6">
        //                 {/* category */}
        //                 <div className="form-control w-full my-6">
        //                     <label className="label">
        //                         <span className="label-text">Category*</span>
        //                     </label>
        //                     <select defaultValue="default" {...register('category', { required: true })}
        //                         className="select select-bordered w-full">
        //                         <option disabled value="default">Select a category</option>
        //                         <option value="salad">Salad</option>
        //                         <option value="pizza">Pizza</option>
        //                         <option value="soup">Soup</option>
        //                         <option value="dessert">Dessert</option>
        //                         <option value="drinks">Drinks</option>
        //                     </select>
        //                 </div>

        //                 {/* price */}
        //                 <div className="form-control w-full my-6">
        //                     <label className="label">
        //                         <span className="label-text">Price*</span>
        //                     </label>
        //                     <input
        //                         type="number"
        //                         placeholder="Price"
        //                         {...register('price', { required: true })}
        //                         className="input input-bordered w-full" />
        //                 </div>

        //             </div>
        //             {/* recipe details */}
        //             <div className="form-control w-full my-6">
        //                     <label className="label">
        //                         <span className="label-text">Popular?*</span>
        //                     </label>
        //                     <select defaultValue="default" {...register('category', { required: true })}
        //                         className="select select-bordered w-full">
        //                         <option disabled value="default">Select a category</option>
        //                         <option value="salad">Popular</option>
        //                         <option value="pizza">Recommended</option>
                               
        //                     </select>
        //                 </div>

        //             <div className="form-control w-full my-6">
        //                 <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
        //             </div>

        //             <button className="btn bg-orange-400">
        //                 Add Item <FaUtensils className="ml-4"></FaUtensils>
        //             </button>
        //         </form>
        //     </div>
        // </div>
    );
};

export default AddItem;