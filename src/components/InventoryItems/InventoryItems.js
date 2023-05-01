import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import Spinner from '../Spinner/Spinner';

const InventoryItems = () => {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const sixItems = items.slice(0, 6)
    useEffect(() => {
        setLoading(true)
        fetch('https://bike-manager.onrender.com/info')
            .then(res => res.json())
            .then(data => setItems(data))
        setLoading(false)
    }, [])
    return (
        <>
            {
                loading ? <Spinner></Spinner> : <div>
                    <h1 className='text-5xl text-center underline underline-offset-8 decoration-orange-500 text-neutral-800'>Inventory Items:{sixItems.length}</h1>
                    <div data-aos="fade-down-left" className=' py-10 flex justify-center mx-8 '>
                        <div className=' z-0 md:grid grid-cols-3 gap-5 w-fit'>
                            {
                                sixItems.map(item => <InventoryItem key={item._id}
                                    item={item}
                                ></InventoryItem>)
                            }

                        </div>
                    </div>
                    <div className='flex justify-center mb-10'>
                        <div>
                            <Link to={'/manageInventory'} className='w-1/6 p-4 rounded-lg  bg'><span className='text-slate-50 font-bold'>Manage Inventories</span></Link>
                        </div>
                    </div>

                </div>
            }
        </>
    );
};

export default InventoryItems;