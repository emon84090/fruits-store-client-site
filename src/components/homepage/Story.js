import React from 'react';

const Story = () => {
    return (
        <>
            <section id='story' className=' mt-5 py-4'>
                <h1 className='text-2xl font-bold text-center mb-16  md:text-3xl mt-3'>Our Story</h1>
                <div className="container mx-auto px-3">
                    <div className="story-all-content grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        <div data-aos="fade-down" className="story-left flex justify-center">
                            <img className='max-h-96 rounded-md' src="https://i.ibb.co/ChMDypL/bg2.jpg" alt="" />
                        </div>
                        <div data-aos="fade-up" className="story-right">
                            <h2 className='text-2xl font-extrabold xs:text-2xl sm:text-4xl md:text-4xl text-gray-800 mt-3'>Healthy,tasty & Fresh Organic Fruits</h2>
                            <p className='mt-7 text-md text-gray-700'>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes</p>

                            <div className="story-content mt-8">
                                <div className="healthy-list flex items-center">
                                    <i className='bx bx-check text-xl text-yellow-400 font-semibold'></i>
                                    <span className='font-semibold ml-1'> Natuaral Foods</span>
                                </div>
                                <div className="healthy-list mt-2 flex items-center">
                                    <i className='bx bx-check text-xl text-yellow-400 font-semibold'></i>
                                    <span className='font-semibold ml-1'> Improve Health</span>
                                </div>
                                <div className="healthy-list flex mt-2 items-center">
                                    <i className='bx bx-check text-xl text-yellow-400 font-semibold'></i>
                                    <span className='font-semibold ml-1'>  Add strength and energy</span>
                                </div>
                                <div className="healthy-list flex mt-2 items-center">
                                    <i className='bx bx-check text-xl text-yellow-400 font-semibold'></i>
                                    <span className='font-semibold ml-1'>Reduces weight</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default Story;