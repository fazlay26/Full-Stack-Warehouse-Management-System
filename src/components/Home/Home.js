import React from 'react';
import AllBrand from '../AllBrand/AllBrand';
import Header from '../Header/Header';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurFacilities from '../OurFacilities/OurFacilities';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner flex justify-center items-center'>
                <div>
                    <div className='p-2'>
                        <h1 data-aos="fade-right" className='text-slate-50 italic  text-6xl '>Buy The Best</h1>
                        <h1 data-aos="fade-left" className='text-slate-50 italic  text-6xl'>Branded Bikes</h1>
                        <h1 className='text-slate-50 italic  text-6xl pb-2'>Fly High on your Bikes</h1>
                    </div>
                    <button data-aos="fade-left" className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded ml-2'>Pre-order</button>
                </div>
            </div>
            <div>
                <InventoryItems></InventoryItems>
            </div>
            <div>
                <AllBrand></AllBrand>
            </div>
            <div>
                <OurFacilities></OurFacilities>
            </div>

        </div>
    );
};

export default Home;