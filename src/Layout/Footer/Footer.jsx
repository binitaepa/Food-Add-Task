
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import img from '../../assets/Image2.png'
const Footer = () => {
    return (
        <div className="bg-amber-500 ">
            <footer className="lg:hidden footer footer-center p-10 bg-amber-500 text-base-content rounded">
            <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="py-2 px-4 border w-full rounded-full"
                    />
                    <button
                        className="absolute  flex items-center top-0 right-0 mt-2  text-orange-400 text-sm rounded-full"
                    >
                         Subscribe <span><FaArrowRight></FaArrowRight></span>
                    </button>
                </div>
                <div className="flex text-white ml-10 gap-2">
                        <AiFillGoogleCircle className='text-4xl'></AiFillGoogleCircle>
                        <AiFillTwitterCircle className='text-4xl'></AiFillTwitterCircle>
                        <AiFillInstagram className='text-4xl'></AiFillInstagram>

                    </div>
                    <h2 className="text-black font-bold text-2xl">Pti.</h2>
                
  <aside>
    <p>Copyright ©trip.All right reserved</p>
  </aside>
</footer>
            <footer className="hidden lg:flex flex-col p-16  mt-10 max-w-screen-lg mx-auto text-neutral-content">
                <div className="relative w-1/2">
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="py-2 px-4 border w-full rounded-full"
                    />
                    <button
                        className="absolute  flex items-center top-0 right-0 mt-2 mr-5 py-1 px-4 bg-orange-500 text-white text-sm rounded-full"
                    >
                         Subscribe <span><FaArrowRight></FaArrowRight></span>
                    </button>
                </div>

                
                <div className="flex gap-20 -mt-24 justify-between items-baseline ">
                    <div className=" p-2 mb-5">

                        <p className="text-black font-bold mb-3 text-sm mt-3"><span className="mb-5 text-2xl">pti.</span><br />Copyright ©trip.All right reserved</p>
                    </div>
                    <div className="flex  ml-10 gap-2">
                        <AiFillGoogleCircle className='text-4xl'></AiFillGoogleCircle>
                        <AiFillTwitterCircle className='text-4xl'></AiFillTwitterCircle>
                        <AiFillInstagram className='text-4xl'></AiFillInstagram>

                    </div>
                    
                    <div className=" ">
                        <img src={img} alt="" className="w-60 " />
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;