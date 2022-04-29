import React from 'react';

const Banner = () => {
    return (
        <>
            <section id='banner' className='w-full relative h-screen pt-32 bg-yellow-400 py-3'>
                <div className="container mx-auto">
                    <div className="banner-all-content grid grid-cols-2 gap-5">
                        <div className="banner-left animate__animated animate__fadeInLeft">
                            <h1 className='text-5xl font-extrabold mt-3'>Fresh Organic Fruites Live Healthily</h1>
                            <p className='mt-7 text-md text-gray-700'>Suitable for Organic Store, Organic Farming, Farm, Organic Food, Organic Food Shop, Dairy Farm, Bakery Shop</p>

                            <button className=' mt-10 h-14 w-40 bg-yellow-500 font-semibold text-white py-2 px-4 border flex items-center hover:bg-white hover:text-yellow-500 border-yellow-400 hover:border-transparent rounded-full'>Our Services <i class='bx bx-chevrons-right text-xl ml-0.5 mt-1'></i></button>
                        </div>
                        <div className="banner-right">
                            <img className=' object-cover' src="https://i.ibb.co/2Z4fKNt/Screenshot-13-removebg-preview.png" alt="" />

                        </div>

                    </div>

                </div>

                <div className="wave-img absolute bottom-0">
                    <img src="http://themeturn.com/tf-db/orgenik-demo/orgenik/assets/images/banner/bg-wave.svg" alt="" srcset="" />
                </div>
            </section>
        </>
    );
};

export default Banner;