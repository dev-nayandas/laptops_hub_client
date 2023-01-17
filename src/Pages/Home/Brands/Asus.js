import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import AsusCard from './AsusCard';

const Asus = () => {
    const asus = useLoaderData();
    const [item, setItem]= useState(null)
    return (
        <div className='mx-auto'>
        <div>
        <h1 className='text-center text-3xl text-primary mt-12 mb-6'>All Asus products are here</h1>
        </div>
        <div  className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3'>
            {
                asus.map(asus => <AsusCard
                    key={asus._id}
                    asus = {asus}
                    setItem={setItem}
                ></AsusCard>)
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

export default Asus;