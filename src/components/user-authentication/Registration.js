import React, { useState } from 'react';
import Sociallink from './Sociallink';

const Registration = () => {
    const [pshowicon, setpShowicon] = useState(false);
    const [cpshowicon, setcpShowicon] = useState(false);

    return (
        <>

            <section className='pt-32 bg-yellow-400 min-h-screen py-5'>
                <div className="container mx-auto">
                    <div className="login-all-content grid grid-cols-2 gap-5">
                        <div className="login animate__animated animate__fadeInLeft max-w-md mx-auto bg-white w-full py-10 rounded-md">

                            <div className="login-content pb-4  flex items-center justify-center flex-col   px-1 md:px-10">
                                <div className="logo">
                                    <h2 className='text-2xl font-semibold'>Sign <span className='text-yellow-500'>Up</span></h2>
                                </div>


                                <form className='w-full px-1 mt-10'>

                                    <div className="input-field mb-3">
                                        <input placeholder='Email' className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" required />
                                    </div>

                                    <div className="input-field relative mb-3  bg-opacity-30 w-full h-12 ">
                                        <input placeholder='password' className='bg-slate-300 w-full h-full bg-opacity-30 p-4 text-gray-600 font-semibold outline-none rounded-sm placeholder:text-sm' type={`${pshowicon ? "text" : "password"}`} name="" required />
                                        <div onClick={() => setpShowicon(!pshowicon)} className="password-icon cursor-pointer absolute right-5 text-gray-600 top-1/2 -translate-y-1/2">
                                            <i className={`bx ${!pshowicon ? 'bx-show' : 'bx-hide'} text-xl`}></i>
                                        </div>
                                    </div>

                                    <div className="input-field relative mb-3  bg-opacity-30 w-full h-12 ">
                                        <input placeholder='password' className='bg-slate-300 w-full h-full bg-opacity-30 p-4 text-gray-600 font-semibold outline-none rounded-sm placeholder:text-sm' type={`${cpshowicon ? "text" : "password"}`} name="" required />
                                        <div onClick={() => setcpShowicon(!cpshowicon)} className="password-icon cursor-pointer absolute right-5 text-gray-600 top-1/2 -translate-y-1/2">
                                            <i className={`bx ${!cpshowicon ? 'bx-show' : 'bx-hide'} text-xl`}></i>
                                        </div>
                                    </div>


                                    <div className="input-field">

                                        <button type='submit' className='mt-3 disabled:bg-opacity-75 disabled:cursor-not-allowed cursor-pointer font-semibold w-full h-12 outline-none rounded-sm placeholder:text-sm bg-yellow-400   text-white'>Sign Up</button>
                                    </div>


                                </form>

                            </div>



                            <Sociallink></Sociallink>

                        </div>



                        <div className="login-right">
                            <img className=' object-cover' src="https://i.ibb.co/2Z4fKNt/Screenshot-13-removebg-preview.png" alt="" />

                        </div>



                    </div>

                </div>

            </section>
        </>
    );
};

export default Registration;