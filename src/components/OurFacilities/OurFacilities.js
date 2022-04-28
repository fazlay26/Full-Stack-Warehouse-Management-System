import React from 'react';

const OurFacilities = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-5xl font-semibold my-5'>Our facilities and features</h1>
            <div className='flex justify-center pt-5'>
                <div className='md:grid grid-cols-3 gap-20'>
                    <div>
                        <img className='w-40 h-1/2' src="https://cdn-icons-png.flaticon.com/512/1168/1168000.png" alt="" />
                        <h1 className='text-xl font-bold text-slate-800'>Always Stock <br /> Availbale</h1>
                        <div className='flex items-center'>
                            <p className='text-red-500'>More info</p>
                            <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/758/758778.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <img className='w-40 h-1/2' src="https://cdn-icons-png.flaticon.com/512/1168/1168000.png" alt="" />
                        <h1 className='text-xl font-bold text-slate-800'>Always Stock <br /> Availbale</h1>
                        <div className='flex items-center'>
                            <p className='text-red-500'>More info</p>
                            <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/758/758778.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <img className='w-40 h-1/2' src="https://cdn-icons-png.flaticon.com/512/1168/1168000.png" alt="" />
                        <h1 className='text-xl font-bold text-slate-800'>Always Stock <br /> Availbale</h1>
                        <div className='flex items-center'>
                            <p className='text-red-500'>More info</p>
                            <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/758/758778.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurFacilities;