
import img from '../../assets/Image1.png'
const Banner = () => {
    return (
        <div className='md:max-w-screen-xl md:mx-10 md:px-10'>
             <div className='flex lg:hidden p-3 m-2 flex-col'>
                        <h1 className=" text-4xl  items-center font-bold">Deliver Food To Your Door Step|</h1>
                        <p className=" py-2">Authentic food| Quick Service, Fast Delivery</p>

                    </div>
            <div className="hero rounded-3xl px-20 lg:min-h-sm lg:min-w-sm mt-20  bg-orange-400 text-white">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='h-lg'>
                        <img src={img} className="md:max-w-xl  md:max-h-lg  -mb-4 " />
                    </div>

                    <div className='hidden lg:flex flex-col'>
                        <h1 className=" lg:text-5xl  md:font-bold">Deliver Food To Your Door Step|</h1>
                        <p className=" md:py-6">Authentic food| Quick Service, Fast Delivery</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;