
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../Hooks/UseInventory';
import Spinner from '../Spinner/Spinner';
import './Inventory.css'


const Inventory = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const [inventoryItem] = useInventory(id)

    let [quantity1, setQuantity] = useState(1)


    const reduceQuantity = () => {
        //const deliverd=inventoryItem.quantity

        inventoryItem.quantity = inventoryItem.quantity - 1
        //console.log(newQuantity);
        const newQuantity = inventoryItem.quantity
        setQuantity(newQuantity)
        console.log(newQuantity);

        const item = { newQuantity }
        // console.log(item);
        setLoading(true)
        const url = `https://bike-manager.onrender.com/info/${id}`;
        fetch(url, {
            method: 'PUT',  //put holo jodi user na thake tahole add korbe ar jodi thake tahole update korbe
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setLoading(false)
            })
    }
    const increaseQuantity = (e) => {
        e.preventDefault()

        //console.log(newQuantity);

        const inputQuantity = e.target.inputQuantity.value
        console.log(inputQuantity);
        if (inputQuantity) {
            inventoryItem.quantity = parseInt(inventoryItem.quantity) + parseInt(inputQuantity)
            const newQuantity = inventoryItem.quantity
            setQuantity(newQuantity)
            const item = { newQuantity }
            // console.log(item);
            const url = `https://bike-manager.onrender.com/info/${id}`;
            setLoading(true)
            fetch(url, {
                method: 'PUT',  //put holo jodi user na thake tahole add korbe ar jodi thake tahole update korbe
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('Items Addeded')
                    setLoading(false)

                })

        }


    }
    return (
        <>
            {
                loading ? <Spinner></Spinner> : <div>
                    <div className='md:flex justify-center items-center'>
                        <div className='bg ml-10   md: borderw-4/5  px-5 py-5 pb-10 drop-shadow-md rounded-lg border-orange-300'>
                            <h1 className='text-gray-100'>Items Id:{id}</h1>
                            <h1 className='text-gray-100'>name:{inventoryItem.name}</h1>
                            <p className='text-gray-100'>{inventoryItem.description}</p>
                            <p className='text-gray-100'>Price:{inventoryItem.price}</p>
                            <p className='text-gray-100'>quantity:{inventoryItem.quantity}</p>
                            {
                                quantity1 === 0 ? <p className='rounded-lg p-1 font-bold text-gray-100 border w-1/12'>Sold Out</p> : ''
                            }
                            <p className='text-gray-100'>Supplier:{inventoryItem.supplier}</p>
                            <div>
                                <button onClick={reduceQuantity} className='border px-4 my-4 drop-shadow-lg rounded-lg text-gray-100 font-bold'>Deliverd</button>
                            </div>
                        </div>
                        <div>
                            <img src={inventoryItem.img} alt="" />
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className=' border-2  p-10 mb-10 rounded-2xl drop-shadow-xl'>
                            <h1 className='text-xl mb-2 font-semibold'>Restock The Items</h1>
                            <form onSubmit={increaseQuantity}>
                                <input className='border rounded-md' type="number" name="inputQuantity" placeholder='place quantity' id="" />
                                <br />
                                <input className='border   px-4 my-4 drop-shadow-lg text-gray-100 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 font-bold' type="submit" value="add" />
                            </form>
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

export default Inventory;