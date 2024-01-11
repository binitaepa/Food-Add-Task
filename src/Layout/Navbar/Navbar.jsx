import { IoSearch } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div className="bg-gray-100   " >
            <div className="   ">
                <div className="flex md:justify-around items-center ">
                    <div className="justify-start" >
                        <a className="btn btn-ghost text-xl font-extrabold">pti.</a>
                    </div>
                    <div className="flex items-center ">
                        <div className="ml-10 justify-center">
                            <div className="relative  items-center justify-center">
                                <p className="absolute mt-2 mx-2 mr-5"><IoSearch className='text-orange-400 text-2xl'></IoSearch></p>
                                <input type="text" placeholder="   Search Audiobook" className="input input-bordered px-5 input-sm md:w-[300px] h-[40px] max-w-xs" />
                            </div>
                        </div>
                        <div className="flex-none  mr-10">
                            <ul className="menu menu-horizontal  p-10 text-sm md:w-full">

                                <li className="bg-white rounded-md">
                                    <details>
                                        <summary>
                                            Menu
                                        </summary>
                                        <ul className=" text-sm mb-2 bg-base-100 ">
                                            <li className="hover:text-orange-400 "><a >Home</a></li>
                                            <li className="hover:text-orange-400 "><a>Details</a></li>
                                            <li className="hover:text-orange-400 "><a>Category</a></li>
                                            <li className="hover:text-orange-400 w-[20px] "><p>My <span>Favorites</span></p></li>
                                            <li className="hover:text-orange-400 "><a>Profile</a></li>
                                            <li className="hover:text-orange-400 "><a>Login/SignUp</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" lg:flex-none lg:gap-2 lg:ml-10 lg:justify-end">

                        <div className="hidden md:dropdown md:dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <FaCircleUser className='text-4xl text-orange-400'></FaCircleUser>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile

                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;