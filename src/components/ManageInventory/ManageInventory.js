
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';

const ManageInventory = () => {
    const [allItems, setAllItems] = useItems()
    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to delete this item?')
        if (proceed) {
            const url = `https://stark-oasis-89448.herokuapp.com/info/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allItems.filter(service => service._id !== id)
                    setAllItems(remaining)

                })
        }
    }
    return (
        <div>
            <h1 className='text-5xl text-center underline underline-offset-1 decoration-orange-500 text-neutral-800'>All Items :{allItems.length}</h1>
            <div className='flex justify-center'>
                <Link to={'/addItem'}><button className='border  p-3 my-4 drop-shadow-lg text-gray-100 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 font-bold'>Add Items</button></Link>
            </div>
            <div data-aos="fade-down-left" className=' py-10 flex justify-center mx-8 '>
                <div className=' z-0 md:grid grid-cols-3 gap-5 w-fit'>
                    {
                        allItems.map(allItem => <div key={allItem._id} className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 z-20'>
                            <img className='rounded-md pb-3' src={allItem.img} alt="" />
                            <h1 className='pb-3 font-bold'>Name:{allItem.name}</h1>
                            <p className='pb-3'>{allItem.description}</p>
                            <p className='pb-5 '>Price:${allItem.price}</p>
                            <p className='pb-5 '>quantity:{allItem.quantity}</p>
                            <p className='pb-5 '>supplier:{allItem.supplier}</p>
                            <button onClick={() => handleDelete(allItem._id)} className='border p-2 rounded-md bg-red-600 text-slate-50 font-semibold'>Delete</button>
                            {/* <div className=' bottom-2 left-1'>
                        <Link to={`/inventory/${id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded pb-3'>Update</Link>
                    </div> */}

                        </div>)


                    }

                </div>
            </div>
        </div>
    );
};

export default ManageInventory;