import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        if (user) {
            navigate(from, { replace: true })
        }
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <p className='font-medium text-slate-50 text-center'>Login With Social Media</p>
            <div onClick={handleGoogleSignIn} className='flex justify-center items-center bg-cyan-400 rounded-lg p-2 my-2'>
                <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                <button className=' w-full py-2 px-2'><span className='text-slate-50 text-xl font-medium'>Google</span>
                </button>

            </div>


        </div>
    );
};

export default SocialLogin;