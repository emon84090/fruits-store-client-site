import axios from 'axios';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Alert from '../Alert';
import Pagetitle from '../Pagetitle';
import auth from './firebaseconfig';
import Sociallink from './Sociallink';

const Login = () => {
    const [pshowicon, setpShowicon] = useState(false);
    const [loginmail, setloginmail] = useState();
    const [loginpassword, setloginpassword] = useState();
    const [spinner, setspinner] = useState(false);


    const [fpassword, fsetpassword] = useState();
    const [forget, setforget] = useState(false);

    const forgetpassword = (e) => {
        fsetpassword(e.target.value)
    }

    const loginemail = (e) => {
        setloginmail(e.target.value)
    }
    const passwordlogin = (e) => {
        setloginpassword(e.target.value)
    }

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const loginForm = async (e) => {
        e.preventDefault();
        setspinner(true);
        try {
            const { user } = await signInWithEmailAndPassword(auth, loginmail, loginpassword);
            setspinner(false);
            const email = user?.email;
            if (email) {
                const { data } = await axios.post('https://infinite-falls-08538.herokuapp.com/login', { email });
                localStorage.setItem('accesstoken', data.accesstoken)
                Alert('Login success', 'success');
                navigate(from, { replace: true });
            }

        } catch (err) {
            setspinner(false);
            Alert(`${err.message}`, 'error')
        }

    }

    const forgetPasswordbtn = async (e) => {

        try {
            const result = await sendPasswordResetEmail(auth, fpassword);

            Alert('check your email we send reset password link', 'success');
        } catch (err) {
            Alert(`${err.message}`, 'error')
        }


    }


    return (
        <>
            <Pagetitle title="Login"></Pagetitle>
            <section className='pt-32 bg-yellow-400 min-h-screen py-5'>
                <div className="container mx-auto">
                    <div className="login-all-content px-3 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="login order-3 md:order-2 animate__animated animate__fadeInLeft max-w-md mx-auto bg-white w-full py-10 rounded-md">

                            <div className="login-content pb-4  flex items-center justify-center flex-col   px-1 md:px-10">
                                <div className="logo">
                                    <h2 className='text-2xl font-semibold'>Log <span className='text-yellow-500'>In</span></h2>
                                </div>


                                <form onSubmit={loginForm} className='w-full px-1 mt-10'>

                                    <div onChange={loginemail} className="input-field mb-3">
                                        <input placeholder='Email' className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" required />
                                    </div>

                                    <div className="input-field relative mb-3  bg-opacity-30 w-full h-12 ">
                                        <input onChange={passwordlogin} placeholder='password' className='bg-slate-300 w-full h-full bg-opacity-30 p-4 text-gray-600 font-semibold outline-none rounded-sm placeholder:text-sm' type={`${pshowicon ? "text" : "password"}`} name="" required />
                                        <div onClick={() => setpShowicon(!pshowicon)} className="password-icon cursor-pointer absolute right-5 text-gray-600 top-1/2 -translate-y-1/2">
                                            <i className={`bx ${!pshowicon ? 'bx-show' : 'bx-hide'} text-xl`}></i>
                                        </div>
                                    </div>


                                    <div className="input-field">

                                        <button disabled={spinner} type='submit' className='mt-3 disabled:bg-opacity-75 disabled:cursor-not-allowed cursor-pointer font-semibold w-full h-12 outline-none rounded-sm placeholder:text-sm bg-yellow-400   text-white'>{spinner ? <i className='bx bx-loader-alt font-semibold animate-spin text-xl'></i> : 'Login'}</button>
                                    </div>


                                </form>

                                <div className="acount-link mt-2 text-center flex justify-between">
                                    <div className='flex justify-between'>

                                        <button onClick={() => setforget(!forget)} className='text-md font-semibold text-gray-700 underline'>Foget password?</button>
                                        <Link className='text-yellow-500 text-md font-semibold capitalize underline ml-6' to="/registration">no acount?</Link>
                                    </div>

                                </div>
                                <div className={`forget-div mb-3 mt-2 transition-all ${forget ? 'max-h-14' : 'max-h-0 overflow-hidden'} `}>


                                    <input className='p-4 w-full h-11 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" placeholder='email address' required onChange={forgetpassword} />

                                    <button onClick={forgetPasswordbtn} className='mb-3 text-white rounded-sm text-sm shadow-sm px-2 mt-1 font-semibold capitalize h-9 bg-yellow-500'>reset now</button>


                                </div>
                            </div>


                            <Sociallink></Sociallink>

                        </div>


                        <div className="login-right order-2">
                            <img className=' object-cover' src="https://i.ibb.co/2Z4fKNt/Screenshot-13-removebg-preview.png" alt="" />

                        </div>



                    </div>

                </div>

            </section>
        </>
    );
};

export default Login;