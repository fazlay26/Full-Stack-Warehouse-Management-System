import React, { useEffect, useState } from 'react';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {
    const [allItems, setAllItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center underline underline-offset-1 text-neutral-800'>All Items :{allItems.length}</h1>
            <div data-aos="fade-down-left" className=' py-10 flex justify-center mx-8 '>
                <div className=' z-0 md:grid grid-cols-3 gap-5 w-fit'>
                    {
                        allItems.map(allItem => <ManageInventoryItem key={allItems.id}
                            allItem={allItem}
                        ></ManageInventoryItem>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageInventory;