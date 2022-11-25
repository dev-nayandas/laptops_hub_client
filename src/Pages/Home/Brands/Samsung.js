import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import SamsungCard from './SamsungCard';

const Samsung = () => {
    const samsung = useLoaderData();
    const [item, setItem]= useState(null)
    return (
        <div className='mx-auto'>
            <div>
            <h1>All Samsung products are here</h1>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto'>
                {
                    samsung.map(apple => <SamsungCard
                        key={apple._id}
                        setItem={setItem}
                        samsung = {apple}
                    ></SamsungCard>)
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

export default Samsung;