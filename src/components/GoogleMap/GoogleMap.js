import React from 'react';
import './GoogleMap.css'

const GoogleMap = () => {
    return (
        <div className='bg-zinc-100 mt-10'>
            <h1 className='text-center text-4xl my-5 font-semibold'>Our Location</h1>

            <div className='flex justify-center'>
                <iframe className='map-design' title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29229.220907061732!2d90.38175667734907!3d23.688377975476577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1651386397685!5m2!1sen!2sbd" loading="lazy" ></iframe>

            </div>


        </div>
    );
};

export default GoogleMap;