
import img from '../../assets/Image1.png'
const Banner = () => {
    return (
        <div className='md:max-w-screen-xl mx-10 px-10'>
            <div className="hero rounded-3xl px-20 lg:min-h-sm lg:min-w-sm mt-20  bg-orange-400 text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='h-xl'>
                        <img src={img} className="max-w-xl  max-h-xl  -mb-4 " />
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold">Deliver Food To Your Door Step|</h1>
                        <p className="py-6">Authentic food| Quick Service, Fast Delivery</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;