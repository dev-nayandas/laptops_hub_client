import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SamsungCard from './SamsungCard';

const Samsung = () => {
    const samsung = useLoaderData();
    return (
        <div className='mx-auto'>
            <div>
            <h1>All Samsung products are here</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto'>
                {
                    samsung.map(apple => <SamsungCard
                        key={apple._id}
                        samsung = {apple}
                    ></SamsungCard>)
                }
            </div>
        </div>
    );
};

export default Samsung;