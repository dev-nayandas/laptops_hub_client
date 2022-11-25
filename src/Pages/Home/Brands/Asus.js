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
        <h1>All apple products are here</h1>
        </div>
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto'>
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