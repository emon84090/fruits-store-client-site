import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'animate.css';

const Header = () => {


    return (
        <>

            <header className={`header fixed top-0 w-full  animate__animated animate__fadeInDown bg-white py-4  p-3`}>
                <div className="container mx-auto">
                    <div className="header-all-content flex items-center justify-between">
                        <div className="header-left flex items-center">
                            <div className="logo">
                                <Link to="/"><img src="http://themeturn.com/tf-db/orgenik-demo/orgenik/assets/images/logo-dark.png" alt="" srcset="" /></Link>
                            </div>
                            <div className="header-menu ml-4">
                                <ul>
                                    <li><NavLink
                                        className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                        to='/home'
                                    >
                                        Home
                                    </NavLink></li>
                                    <li><NavLink
                                        className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                        to='/home'
                                    >
                                        About
                                    </NavLink></li>
                                    <li><NavLink
                                        className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                        to='/home'
                                    >
                                        Services
                                    </NavLink></li>
                                    <li><NavLink
                                        className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                        to='/home'
                                    >
                                        Blog
                                    </NavLink></li>
                                    <li><NavLink
                                        className={({ isActive }) => (`font-semibold text-md capitalize ${isActive ? "text-yellow-500" : ""}`)}
                                        to='/home'
                                    >
                                        Contact
                                    </NavLink></li>
                                </ul>

                            </div>

                        </div>
                        <div className="header-right">
                            <div className="contact-information flex items-center">
                                <div className="phone-icon">
                                    <img className='w-12' src="https://i.ibb.co/3ccpB3Y/icons8-phone-80.png" alt="" />
                                </div>
                                <div className="phone-text ml-2">
                                    <span className='font-semibold text-sm capitalize text-gray-700'>contact for support</span>
                                    <p className='font-bold text-gray-700 text-xl'>01722245</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </header>

        </>
    );
};

export default Header;