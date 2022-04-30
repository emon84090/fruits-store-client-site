import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'animate.css';

const Header = () => {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div onClick={() => setMenu(!menu)} className="menues md:hidden fixed flex items-center z-10 top-0 w-full h-14 bg-white">
                <i className='bx bx-menu text-xl ml-2'></i>
            </div>
            <header className={`header w-72 ${!menu ? '-left-72' : '-left-0'} md:left-0 h-full md:h-max fixed top-0 md:w-full  animate__animated animate__fadeInDown bg-white py-7  p-3 z-20`}>
                <div className="container mx-auto">
                    <div className="header-all-content flex-col md:flex-row  flex flex-wrap items-center justify-between relative">
                        <div onClick={() => setMenu(false)} className="close-menu absolute right-0 md:hidden">
                            <i className='bx bx-x text-xl' ></i>
                        </div>
                        <div className="header-left flex items-center flex-col  md:flex-row  flex-wrap ">
                            <div className="logo  ">
                                <Link to="/" className='text-xl font-bold text-opacity-75'><span className='text-yellow-400'>Fruits</span> Store</Link>
                            </div>
                            <div className="header-menu m-1 md:ml-8">
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
                                        to='/managefruits'
                                    >
                                        Manage items
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

                        <div className="header-right mt-3">
                            <div className="contact-information flex-wrap flex items-center">
                                <Link to="/registration" ><button className='bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-3xl'>Signup</button></Link>

                                <Link to="/login"> <button className='bg-transparent ml-2 hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-3xl'>Login</button></Link>

                            </div>

                        </div>
                    </div>
                </div>

            </header>

        </>
    );
};

export default Header;