import React, { useState } from 'react';
import AllBrand from '../AllBrand/AllBrand';
import ExtraSection from '../ExtraSection/ExtraSection';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header from '../Header/Header';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurFacilities from '../OurFacilities/OurFacilities';
import Spinner from '../Spinner/Spinner';
import './Home.css'

const Home = () => {
    return (
        <>
            <div>
                <div className='banner flex justify-end  items-center pr-20'>
                    <div className=''>
                        <div className='p-2'>
                            <h1 data-aos="fade-right" className='text-slate-50 italic  text-6xl '>ELEGANE UNLIMITED</h1>
                            <h1 data-aos="fade-left" className='text-slate-50 italic  text-6xl'>XDIAVEL NERA</h1>
                            <h1 className='text-slate-50 italic  text-4xl pb-2'>UNIQUE AND EXCLUSIVES</h1>
                        </div>
                        <button data-aos="fade-left" className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-orange-700 rounded ml-2'>Contact Dealer</button>
                    </div>
                </div>
                <div>
                    <InventoryItems></InventoryItems>
                </div>
                {/* <div>
                    <AllBrand></AllBrand>
                </div> */}
                <div>
                    <ExtraSection></ExtraSection>
                </div>
                <div>
                    <GoogleMap></GoogleMap>
                </div>
                <div>
                    <OurFacilities></OurFacilities>
                </div>

            </div>

        </>
    );
};

export default Home;