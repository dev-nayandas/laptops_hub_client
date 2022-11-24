import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppleCard from './AppleCard';

const Apple = () => {
    const apple = useLoaderData();

    return (
        <div className='mx-auto'>
            <div>
            <h1>All apple products are here</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto'>
                {
                    apple.map(apple => <AppleCard
                        key={apple._id}
                        apple = {apple}
                    ></AppleCard>)
                }
            </div>
        </div>
    );
};

export default Apple;