import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
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
        createUserWithEmailAndPassword,
        user,
        hookLoading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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
    const handleConfirmPass = e => {
        if (e.target.value === userInfo.pass) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, pass: "" });
        } else {
            setErrors({ ...errors, pass: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    }
    if (user) {
        navigate(from, { replace: true })
    }


    const handleSignup = async e => {
        const email = userInfo?.email
        setLoading(true)
        e.preventDefault()
        await createUserWithEmailAndPassword(userInfo.email, userInfo.pass);
        setLoading(false)
        const { data } = await axios.post('https://bike-manager.onrender.com/login', { email })
        localStorage.setItem('accessToken', data.accesToken)
        toast('email verification sent')


    }

    return (
        <>
            {
                loading ? <Spinner></Spinner> : <div className=' login-bg'>
                    <div className="  w-full  flex flex-col items-center justify-center h-screen ">
                        <form onSubmit={handleSignup} className="w-full md:w-1/3  login-box">
                            <div className="flex font-bold justify-center mt-6">
                                <img className="h-20 w-20"
                                    src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='' />
                            </div>
                            <h2 className="text-3xl text-center text-white mb-4">Register Form</h2>
                            <div className="px-12 pb-10" />
                            <div className="w-full mb-2">
                                <div className="flex items-center">

                                    <input onChange={handleEmail} type='text' placeholder="Email"
                                        className="md:-mx-6    w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                                </div>
                                {errors?.email && <p className="text-red-600">{errors.email}</p>}
                            </div>
                            <div className="w-full mb-2">
                                <div className=" relative flex items-center">
                                    <input onChange={handlePass} type='password' placeholder="Password"
                                        className="md:-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                                    {/* <img onClick={() => setShowPass(!showPass)} className='cursor-pointer eye w-1/12 h-1/12 absolute  right-6' src="https://cdn-icons-png.flaticon.com/512/633/633633.png" alt="" /> */}
                                </div>
                                {errors?.pass && <p className="text-red-600">{errors.pass}</p>}
                            </div>
                            <div className="w-full mb-2">
                                <div className=" relative flex items-center">
                                    <input onChange={handleConfirmPass} type='password' placeholder="Confirm Password"
                                        className="md:-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                                    {/* <img onClick={() => setShowPass(!showPass)} className='cursor-pointer eye w-1/12 h-1/12 absolute  right-6' src="https://cdn-icons-png.flaticon.com/512/633/633633.png" alt="" /> */}
                                </div>
                                {/* {errors?.pass && <p className="text-red-600">{errors.pass}</p>} */}
                            </div>

                            <div className='flex justify-center'>
                                <button type="submit"
                                    className="w-1/4 py-2 my-4  rounded-full bg-cyan-500 text-gray-100  focus:outline-none">SignUp</button>
                            </div>
                            <p className='text-red-800 font-semibold'>{hookError && hookError.message}</p>
                            <p className='pt-2 text-slate-50 font-semibold'>Already Have an Account??<Link className='underline underline-offset-1 text-cyan-400' to={'/login'}>Please Login</Link></p>
                            <SocialLogin></SocialLogin>
                        </form>


                    </div>
                    <ToastContainer
                        position="top-right"
                    />


                </div>
            }
        </>
    );
};

export default SignUp;