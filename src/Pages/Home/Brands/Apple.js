import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import AppleCard from './AppleCard';

const Apple = () => {
    const apple = useLoaderData();
    const [item, setItem]= useState(null)

    return (
        <div className='mx-auto'>
            <div>
            <h1 className='text-center text-3xl text-primary mt-12 mb-6'>All apple products are here</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    apple.map(apple => <AppleCard
                        key={apple._id}
                        setItem={setItem}
                        apple = {apple}
                    ></AppleCard>)
                }
            </div>
            { item &&
       <BookingModal
            item ={item}
        ></BookingModal>
        }
        </div>
    );
};

export default Apple;