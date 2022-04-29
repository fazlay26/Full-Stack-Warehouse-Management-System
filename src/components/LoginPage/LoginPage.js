import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './LoginPage.css'

const LoginPage = () => {
    let navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        pass: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        pass: "",
        general: "",
    });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        }
        else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

    }
    const handlePass = e => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, pass: e.target.value });
            setErrors({ ...errors, pass: "" });
        }
        else {
            setErrors({ ...errors, pass: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, pass: "" });
        }

    }
    if (user) {
        navigate('/')
    }
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.pass)
    }
    return (
        <div className=' bg-gradient-to-r from-sky-500 to-indigo-500'>
            <div className=" w-full  flex flex-col items-center  h-screen">
                <form onSubmit={handleLogin} className="w-full md:w-1/3">
                    <div className="flex font-bold justify-center mt-6">
                        <img className="h-20 w-20"
                            src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='' />
                    </div>
                    <h2 className="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
                    <div className="px-12 pb-10" />
                    <div className="w-full mb-2">
                        <div className="flex items-center">

                            <input onChange={handleEmail} type='text' placeholder="Email"
                                className="md:-mx-6    w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                        </div>
                        {/* {errors?.email && <p className="text-red-600">{errors.email}</p>} */}
                    </div>
                    <div className="w-full mb-2">
                        <div className=" relative flex items-center">
                            <input onChange={handlePass} type='password' placeholder="Password"
                                className="md:-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                            {/* <img onClick={() => setShowPass(!showPass)} className='cursor-pointer eye w-1/12 h-1/12 absolute  right-6' src="https://cdn-icons-png.flaticon.com/512/633/633633.png" alt="" /> */}
                        </div>
                        {/* {errors?.pass && <p className="text-red-600">{errors.pass}</p>} */}
                    </div>
                    <a href="#" className="text-xs text-white float-right mb-4">Forgot Password?</a>
                    {/* <p className='text-red-600'>{hookError && hookError.message}</p> */}
                    <div className='flex justify-center'>
                        <button type="submit"
                            className="w-1/4 py-2 my-4  rounded-full bg-cyan-500 text-gray-100  focus:outline-none">LogIn</button>
                    </div>
                    <p className='pt-2 text-slate-50 font-semibold'>New To Duffer Fitness??<Link className='underline underline-offset-1 text-slate-900' to={'/signup'}>Create An Account</Link></p>
                </form>

                <div className='my-3'>
                    <SocialLogin></SocialLogin>
                </div>


            </div>


        </div>
    );
};

export default LoginPage;