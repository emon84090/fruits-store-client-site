import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-800 py-9 text-white'>
                <div className="container mx-auto px-5">
                    <div className="footer-all-content mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5">
                        <div className="footer-left  mt-7">
                            <Link to="/" className='text-xl font-bold text-opacity-75'><span className='text-yellow-400'>Fruits</span> Store</Link>
                            <p className='mt-3 text-gray-400'>Most fresh fruit, including apples, berries and grapes, will last longer if kept in their original packaging and stored in the crisper of your fridge. </p>

                            <div className="social-icon mt-5">
                                <button type="button" className="text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  ">
                                    <i className='bx bxl-facebook text-md' ></i>
                                </button>
                                <button type="button" className="ml-2 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  ">
                                    <i className='bx bxl-twitter text-md' ></i>
                                </button>
                                <button type="button" className="ml-2 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  ">
                                    <i className='bx bxl-instagram text-md' ></i>
                                </button>
                                <button type="button" className="ml-2 text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  ">
                                    <i className='bx bxl-yahoo text-md' ></i>
                                </button>
                            </div>
                        </div>

                        <div className="footer-midle flex md:justify-center">
                            <div className="footer-midle-content mt-5">
                                <h2 className='text-xl font-semibold text-opacity-75'> Services</h2>
                                <ul className='mt-3'>
                                    <li className='text-md text-gray-400 mb-1.5'>Our Gellary</li>
                                    <li className='text-md text-gray-400 mb-1.5'>Fruits item</li>

                                    <li className='text-md text-gray-400 mb-1.5'>Privacy Polacy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-right">
                            <div className="footer-right-content flex md:justify-center">

                                <div className="footer-right-right mt-5">
                                    <ul>
                                        <h2 className='text-xl font-semibold text-opacity-75'> Contact</h2>
                                        <ul className='mt-3'>
                                            <li className='text-md flex items-center  text-gray-400 mb-1.5'><i className='bx bxs-envelope mr-1 text-yellow-400'></i><span> Fruitstore@gmail.com</span></li>

                                            <li className='text-md flex items-center  text-gray-400 mb-1.5'><i className='bx bxs-phone-call mr-1 text-yellow-400'></i><span> +88013747</span></li>

                                            <li className='text-md flex items-center  text-gray-400 mb-1.5'><i className='bx bxs-location-plus mr-1 text-yellow-400'></i><span> Moon Street Light Avenue, 14/05</span></li>
                                            <li className='text-md flex items-center  text-gray-400 mb-1.5'><i className='bx bx-globe mr-1 text-yellow-400'></i><span>Fruitstore.com</span></li>

                                        </ul>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="footer-bottom mt-5 md:mt-16 md:flex justify-between mx-4">
                        <div className="footer-b-left ">
                            <p>copyright © 2022 Fruits store</p>
                        </div>
                        <div className="footer-b-right">
                            <ul className='md:flex'>
                                <li className='mr-4'>Privacy Policy</li>
                                <li className='mr-4'>Terms Of Use</li>
                                <li className='mr-4'>Pricing</li>
                            </ul>
                        </div>

                    </div>

                </div>



            </footer>
        </>
    );
};

export default Footer;