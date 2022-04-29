import React from 'react';

const Login = () => {
    return (
        <>
            <section className='pt-32 bg-yellow-50 min-h-screen'>
                <div className="container mx-auto">
                    <div className="login-all-content grid grid-cols-2 gap-5">
                        <div className="login animate__animated animate__fadeInLeft">
                            <div className="login-content max-w-md mx-auto rounded-md flex items-center h-full justify-center flex-col  bg-white px-2 md:px-10">

                                <div className="logo">
                                    <h2 className='text-2xl font-semibold'>Sign <span className='text-yellow-500'>In</span></h2>
                                </div>


                                <form className='w-full px-2 mt-10'>

                                    <div className="input-field mb-3">
                                        <input placeholder='Email' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" required />
                                    </div>
                                    <div className="input-field mb-3">
                                        <input placeholder='Password' className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="password" name="" required />
                                    </div>

                                    <div className="input-field">

                                        <button type='submit' className='disabled:bg-opacity-75 disabled:cursor-not-allowed cursor-pointer w-full h-11 outline-none rounded-sm placeholder:text-sm bg-yellow-500   text-white'>Login</button>
                                    </div>


                                </form>



                            </div>
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

export default Login;