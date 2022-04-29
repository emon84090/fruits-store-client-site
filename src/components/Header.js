import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'animate.css';

const Header = () => {


    return (
        <>

            <header className={`header fixed top-0 w-full  animate__animated animate__fadeInDown bg-white py-7  p-3 z-20`}>
                <div className="container mx-auto">
                    <div className="header-all-content flex items-center justify-between">
                        <div className="header-left flex items-center">
                            <div className="logo">
                                <Link to="/" className='text-xl font-bold text-opacity-75'><span className='text-yellow-400'>Fruits</span> Store</Link>
                            </div>
                            <div className="header-menu ml-6">
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
                                <button className='bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-3xl'><Link to="/registration" >Signup</Link></button>

                                <button className='bg-transparent ml-2 hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-3xl'><Link to="/login">Login</Link></button>


                            </div>

                        </div>
                    </div>
                </div>

            </header>

        </>
    );
};

export default Header;