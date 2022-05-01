import React from 'react';
import './ExtraSection.css'

const ExtraSection = () => {
    return (
        <div className='flex justify-center'>
            <div className='h-1/2 w-[100rem] bg-zinc-100'>
                <div className='flex'>
                    <div className='geeks'>
                        <img className='' src="https://cdn.shopify.com/s/files/1/0461/8371/0869/files/mixed-banner-1_18657a9f-9a69-4792-957a-356bed95612f_1060x.jpg?v=1597839683" alt="" />
                    </div>
                    <div className='flex mx-auto items-center'>
                        <div>
                            <h1 className='text-3xl font-semibold'>RIDER THRILLING EFFECT</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, natus.</p>
                            <button className='text-xl font-semibold hover-underline-animation'>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex mx-auto items-center'>
                        <div>
                            <h1 className='text-3xl font-semibold'>RIDER THRILLING EFFECT</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, natus.</p>
                            <button className='text-xl font-semibold hover-underline-animation'>READ MORE</button>
                        </div>
                    </div>
                    <div className='geeks'>
                        <img className='' src="https://cdn.shopify.com/s/files/1/0461/8371/0869/files/Rayz-1_1060x.jpg?v=1600865233" alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ExtraSection;