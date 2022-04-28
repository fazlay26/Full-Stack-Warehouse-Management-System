import React from 'react';

const InventoryItem = (props) => {
    const { name, img, description, price } = props.item
    return (
        <div className='relative   block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 z-20'>
            <img className='rounded-md pb-3' src={img} alt="" />
            <h1 className='pb-3 font-bold'>Name:{name}</h1>
            <p className='pb-3'>{description}</p>
            <p className='pb-5 '>Price:${price}</p>
            <div className='absolute bottom-2 left-1'>
                <button to={'/Chekout'} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded pb-3'>Booking Now</button>
            </div>

        </div>
    );
};

export default InventoryItem;