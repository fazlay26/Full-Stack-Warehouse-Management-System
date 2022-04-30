// import useItems from "../../Hooks/useItems";
// import React, { useEffect, useState } from 'react';


// const ManageInventoryItem = (props) => {

//     const { name, img, description, price, quantity, supplier, _id } = props.allItem
//     const handleDelete = id => {
//         const proceed = window.confirm('are you sure you want to delete this item?')
//         if (proceed) {
//             const url = `http://localhost:5000/info/${id}`
//             console.log(url);
//             fetch(url, {
//                 method: 'DELETE'
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);

//                 })
//         }
//     }
//     return (
//         <div className='   block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 z-20'>
//             <img className='rounded-md pb-3' src={img} alt="" />
//             <h1 className='pb-3 font-bold'>Name:{name}</h1>
//             <p className='pb-3'>{description}</p>
//             <p className='pb-5 '>Price:${price}</p>
//             <p className='pb-5 '>quantity:{quantity}</p>
//             <p className='pb-5 '>supplier:{supplier}</p>
//             <button onClick={() => handleDelete(_id)} className='border p-2 rounded-md bg-red-600 text-slate-50 font-semibold'>Delete</button>
//             {/* <div className=' bottom-2 left-1'>
//             <Link to={`/inventory/${id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded pb-3'>Update</Link>
//         </div> */}

//         </div>
//     );
// };

// export default ManageInventoryItem;