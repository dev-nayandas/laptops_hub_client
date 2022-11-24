import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AsusCard from './AsusCard';

const Asus = () => {
    const asus = useLoaderData();
    return (
        <div className='mx-auto'>
        <div>
        <h1>All apple products are here</h1>
        </div>
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto'>
            {
                asus.map(apple => <AsusCard
                    key={apple._id}
                    asus = {apple}
                ></AsusCard>)
            }
        </div>
    </div>
    );
};

export default Asus;