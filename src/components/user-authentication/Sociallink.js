import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from './firebaseconfig';
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from '../Alert';

const Sociallink = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const siginwithgoogle = async () => {
        try {
            const { user } = await signInWithPopup(auth, provider);
            navigate(from, { replace: true });

        } catch (err) {
            Alert(`${err.message}`, 'error')
        }


    }
    return (
        <>
            <div className="social-login-system px-3 md:px-10">
                <div className="or flex items-center">
                    <div className='w-1/2 h-px bg-gray-300'></div>
                    <span className='text-gray-400 px-2'>or</span>
                    <div className='w-1/2 h-px bg-gray-300'></div>
                </div>
                <button onClick={siginwithgoogle} className="focus:outline-none  py-3.5 px-4 border rounded-lg border-gray-300 flex items-center w-full mt-10">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
                    <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                </button>
            </div>


        </>
    );
};

export default Sociallink;