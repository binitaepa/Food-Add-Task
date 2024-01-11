import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/Image1.png'
import { useEffect } from 'react';
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 5000 });
    }, [])
    return (
        <div className='md:max-w-screen-xl md:mx-10 md:px-10'>
             <div data-aos="flip-right" data-aos-duration="1200" className='flex lg:hidden p-3 m-2 flex-col'>
             <TypeAnimation
                            sequence={[

                                'Deliver Food To Your Door Step ',
                                2000,
                                'Deliver Food To Your Door Step',
                                1000
                               
                            ]}
                            wrapper="span"
                            speed={10}
                            className=" text-4xl  items-center font-bold"
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        {/* <h1 className=" text-4xl  items-center font-bold">Deliver Food To Your Door Step|</h1> */}
                        <p className=" py-2">Authentic food| Quick Service, Fast Delivery</p>

                    </div>
            <div data-aos="flip-right" data-aos-duration="1200" className="hero rounded-3xl px-20 lg:min-h-sm lg:min-w-sm mt-20  bg-orange-400 text-white">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='h-lg'>
                        <img src={img} className="md:max-w-xl  md:max-h-lg  -mb-4 " />
                    </div>

                    <div className='hidden lg:flex flex-col'>
                    <TypeAnimation
                            sequence={[

                                'Deliver Food To Your Door Step ',
                                2000,
                                'Deliver Food To Your Door Step',
                                1000
                               
                            ]}
                            wrapper="span"
                            speed={10}
                            className=" lg:text-5xl  md:font-bold"
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        {/* <h1 className=" lg:text-5xl  md:font-bold">Deliver Food To Your Door Step|</h1> */}
                        <p className=" md:py-6">Authentic food| Quick Service, Fast Delivery</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;