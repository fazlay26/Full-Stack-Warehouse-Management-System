import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = (props) => {
    const { name, img, description, price, quantity, supplier, _id } = props.item
    return (
        <div className='   block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 z-20'>
            <img className='rounded-md pb-3' src={img} alt="" />
            <h1 className='pb-3 font-bold'>Name:{name}</h1>
            <p className='pb-3'>{description}</p>
            <p className='pb-5 '>Price:${price}</p>
            <p className='pb-5 '>quantity:{quantity}</p>
            <p className='pb-5 '>supplier:{supplier}</p>
            <div className=' bottom-2 left-1'>
                <Link to={`/inventory/${_id}`} className='bg-gradient-to-r from-orange-300 to-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded pb-3'>Update</Link>
            </div>

        </div>
    );
};

export default InventoryItem;