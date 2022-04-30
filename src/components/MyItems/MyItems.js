import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [myItems, setMyItems] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email
            const url = `http://localhost:5000/myitem?email=${email}`
            const { data } = await axios.get(url)
            setMyItems(data)
        }
        getMyItems()

    }, [user])
    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete this item?')
        if (proceed) {
            const url = `http://localhost:5000/info/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(myItem => myItem._id !== id)
                    setMyItems(remaining)

                })
        }
    }
    return (
        <div>
            <h1 className='text-center font-semibold text-2xl '>This user <span className='text-orange-400'>({user?.email})</span> has added:{myItems.length} items</h1>
            <div className='flex justify-center items-center mt-10'>
                <div className='bg border w-1/2 px-5 py-5 pb-10 drop-shadow-md rounded-lg border-orange-300'>
                    {
                        myItems.map(myItem => <>
                            <div className='border-2 p-4 m-5 rounded-lg'>
                                <h1 className='text-center'>name:{myItem.name}</h1>
                                <p className='text-center'>price:${myItem.price}</p>
                                <p className='text-center'>quantity:{myItem.quantity}</p>
                                <p className='text-center'>supplier:{myItem.supplier}</p>
                                <div className='flex justify-center'>
                                    <img className='w-1/2 h-1/2' src={myItem.img} alt="" />
                                </div>
                                <div className='flex justify-center'>
                                    <button onClick={() => handleDelete(myItem._id)} className='border px-4 my-4 drop-shadow-lg rounded-lg text-gray-100 font-bold'>Cancel</button>
                                </div>
                            </div>

                        </>

                        )
                    }
                </div>
                <div>
                    {/* {
                        myItems.map(i => <>
                            <img src={i.img} alt="" />
                        </>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default MyItems;