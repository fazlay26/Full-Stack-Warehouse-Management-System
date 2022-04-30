
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../Hooks/UseInventory';
import './Inventory.css'


const Inventory = () => {


    const { id } = useParams()
    const [inventoryItem] = useInventory(id)
    let [quantity1, setQuantity] = useState(5)


    const reduceQuantity = () => {
        let newQuantity = quantity1 - 1
        //console.log(newQuantity);
        setQuantity(newQuantity)
        console.log(newQuantity);

        const item = { newQuantity }
        // console.log(item);
        const url = `http://localhost:5000/info/${id}`;
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
                alert('users added succesfully')
            })
    }
    const increaseQuantity = (e) => {
        e.preventDefault()

        //console.log(newQuantity);

        const inputQuantity = e.target.inputQuantity.value
        console.log(inputQuantity);
        const newQuantity = parseInt(quantity1) + parseInt(inputQuantity)
        setQuantity(newQuantity)

        const item = { newQuantity }
        // console.log(item);
        const url = `http://localhost:5000/info/${id}`;
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
                alert('users added succesfully')
            })

    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='bg border w-1/2 px-5 py-5 pb-10 drop-shadow-md rounded-lg border-orange-300'>
                    <h1 className='text-gray-100'>Items Id:{id}</h1>
                    <h1 className='text-gray-100'>name:{inventoryItem.name}</h1>
                    <p className='text-gray-100'>{inventoryItem.description}</p>
                    <p className='text-gray-100'>Price:{inventoryItem.price}</p>
                    <p className='text-gray-100'>quantity:{quantity1}</p>
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
                    <h1 className='text-xl mb-2'>Restock The Items</h1>
                    <form onSubmit={increaseQuantity}>
                        <input className='border rounded-md' type="number" name="inputQuantity" placeholder='place quantity' id="" />
                        <br />
                        <input className='border   px-4 my-4 drop-shadow-lg text-gray-100 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-bold' type="submit" value="add" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Inventory;