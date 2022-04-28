import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center underline underline-offset-1 text-neutral-800'>Choose Your Bike:{items.length}</h1>
            <div data-aos="fade-down-left" className=' py-10 flex justify-center mx-8 '>
                <div className=' z-0 md:grid grid-cols-3 gap-5 w-fit'>
                    {
                        items.map(item => <InventoryItem key={item.id}
                            item={item}
                        ></InventoryItem>)
                    }

                </div>
            </div>

        </div>
    );
};

export default InventoryItems;