import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/info`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Item Added Done')
            })
    };
    return (
        <div className=''>
            <h1 className='text-center mb-8 text-2xl font-bold'>Add Item</h1>
            <form className='flex flex-col  w-1/2 mx-auto border-2   p-10 rounded-lg border-orange-500' onSubmit={handleSubmit(onSubmit)}>
                <input className='border-2 mb-4 rounded-md' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='border-2 mb-4 rounded-md' value={user.email} placeholder='Email' {...register("email", { required: true, maxLength: 20 })} />
                <textarea className='border-2 mb-4 rounded-md' placeholder='Description'{...register("description",)} />
                <input className='border-2 mb-4 rounded-md' placeholder='Price' type="number" {...register("price",)} />
                <input className='border-2 mb-4 rounded-md' placeholder='Quantity' type="number" {...register("quantity",)} />
                <input className='border-2 mb-4 rounded-md' placeholder='Supplier' type="text" {...register("supplier",)} />
                <input className='border-2 mb-4 rounded-md' placeholder='Photo URL' type="text" {...register("img",)} />
                <div className='flex justify-center mb-4'>
                    <input className='text-slate-50 bg font-semibold border w-1/2 p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500' type="submit" />
                </div>
            </form>
            <ToastContainer
                position="top-center"
            />
        </div>
    );
};

export default AddItem;