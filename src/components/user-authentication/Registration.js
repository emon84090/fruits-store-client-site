
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../Alert';
import auth from './firebaseconfig';
import Sociallink from './Sociallink';

const Registration = () => {
    const navigate = useNavigate();
    const [pshowicon, setpShowicon] = useState(false);
    const [cpshowicon, setcpShowicon] = useState(false);
    const [spinner, setspinner] = useState(false);
    const [email, setmail] = useState({
        value: '',
        error: ''
    });

    const [password, setpassword] = useState({
        value: '',
        error: ''
    });

    const [confirmpass, setconfirmpass] = useState({
        value: '',
        error: ''
    });

    const handlemail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setmail({ value: emailInput, error: "" });
        } else {
            setmail({ value: "", error: "Please Provide a valid Email" });
        }

    }
    const handlpassword = (event) => {
        const passwordInput = event.target.value;
        if (passwordInput.length < 7) {
            setpassword({
                value: '',
                error: "password must be 6 letter"
            })
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            setpassword({
                value: '',
                error: "password must contain capital letter"
            })
        } else {
            setpassword({
                value: passwordInput,
                error: ""
            })

        }

    }

    const handlconfirmpassword = (event) => {
        const confirmpasswordInput = event.target.value;
        if (confirmpasswordInput !== password.value) {
            setconfirmpass({
                error: 'password not matched',
                value: ''
            })

        } else {
            setconfirmpass({
                error: '',
                value: confirmpasswordInput
            })
        }

    }

    const signupForm = async (e) => {
        setspinner(true);
        e.preventDefault();
        if (email.value && password.value) {
            if (password.value !== confirmpass.value) {
                Alert('password not matched', 'error');
                setspinner(false);
            } else {

                try {
                    const { user } = await createUserWithEmailAndPassword(auth, email.value, password.value);

                    if (user) {
                        await sendEmailVerification(auth.currentUser);
                        setspinner(false);
                        navigate('/login')
                        Alert('Sign up Success,chek your email for active your acount', 'success');
                    }

                } catch (err) {
                    setspinner(false);
                    Alert(`${err.message}`, 'error')
                }

            }

        }

    }

    return (
        <>

            <section className='pt-32 bg-yellow-400 min-h-screen py-10'>
                <div className="container mx-auto">
                    <div className="registration-all-content grid px-3 grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="registration order-3 md:order-2 animate__animated animate__fadeInLeft max-w-md mx-auto bg-white w-full py-10 rounded-md">

                            <div className="registration-content pb-4  flex items-center justify-center flex-col   px-1 md:px-10">
                                <div className="logo">
                                    <h2 className='text-2xl font-semibold'>Sign <span className='text-yellow-500'>Up</span></h2>
                                </div>


                                <form className='w-full px-1 mt-10' onSubmit={signupForm}>

                                    <div className="input-field mb-2">
                                        <input onChange={handlemail} placeholder='Email' className='p-4 w-full h-12 outline-none rounded-sm placeholder:text-sm bg-slate-300 bg-opacity-30 font-semibold text-gray-600' type="email" name="" required />
                                    </div>
                                    <div className="error mb-1">
                                        {email.error && (<p className='text-sm font-semibold text-red-500'>{email.error}</p>)}
                                    </div>

                                    <div className="input-field relative mb-2  bg-opacity-30 w-full h-12 ">
                                        <input onChange={handlpassword} placeholder='password' className='bg-slate-300 w-full h-full bg-opacity-30 p-4 text-gray-600 font-semibold outline-none rounded-sm placeholder:text-sm' type={`${pshowicon ? "text" : "password"}`} name="" required />
                                        <div onClick={() => setpShowicon(!pshowicon)} className="password-icon cursor-pointer absolute right-5 text-gray-600 top-1/2 -translate-y-1/2">
                                            <i className={`bx ${!pshowicon ? 'bx-show' : 'bx-hide'} text-xl`}></i>
                                        </div>

                                    </div>
                                    <div className="error mb-1">
                                        {password.error && (<p className='text-sm font-semibold text-red-500'>{password.error}</p>)}
                                    </div>

                                    <div className="input-field mt-1  relative mb-1  bg-opacity-30 w-full h-12 ">
                                        <input onChange={handlconfirmpassword} placeholder='password' className='bg-slate-300 w-full h-full bg-opacity-30 p-4 text-gray-600 font-semibold outline-none rounded-sm placeholder:text-sm' type={`${cpshowicon ? "text" : "password"}`} name="" required />
                                        <div onClick={() => setcpShowicon(!cpshowicon)} className="password-icon cursor-pointer absolute right-5 text-gray-600 top-1/2 -translate-y-1/2">
                                            <i className={`bx ${!cpshowicon ? 'bx-show' : 'bx-hide'} text-xl`}></i>
                                        </div>
                                    </div>
                                    <div className="error mb-0.5">
                                        {confirmpass.error && (<p className='text-sm font-semibold text-red-500'>{confirmpass.error}</p>)}
                                    </div>

                                    <div className="input-field">

                                        <button disabled={spinner} type='submit' className='mt-3 disabled:bg-opacity-75 disabled:cursor-not-allowed cursor-pointer font-semibold w-full h-12 outline-none rounded-sm placeholder:text-sm bg-yellow-400   text-white'>{spinner ? <i className='bx bx-loader-alt font-semibold animate-spin text-xl'></i> : 'Sign Up'}</button>
                                    </div>

                                    <div className="acount-link mt-2 text-center">
                                        <Link to="/login" className='text-yellow-500 font-semibold'>Already have acount?</Link>
                                    </div>
                                </form>

                            </div>

                            <Sociallink></Sociallink>

                        </div>



                        <div className="registration-right order-2">
                            <img className=' object-cover' src="https://i.ibb.co/2Z4fKNt/Screenshot-13-removebg-preview.png" alt="" />

                        </div>



                    </div>

                </div>

            </section>
        </>
    );
};

export default Registration;