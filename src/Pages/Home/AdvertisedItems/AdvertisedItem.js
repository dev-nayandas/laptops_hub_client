import React from 'react';

const AdvertisedItem = ({item}) => {
    const {model,img,location, resalePrice,orginalPrice, usedTime, sellerName} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-4 border-indigo-200 border-t-indigo-500">
        <figure className="px-10 pt-10">
          <img style={{height:'300px'}} src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Model :{model}</h2>
          <p>Location : {location}</p>
          <p>Resale Price : {resalePrice}</p>
          <p>Orginal Price : {orginalPrice}</p>
          <p>Seller Name : {sellerName}</p>
          <p>Used Time : {usedTime}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default AdvertisedItem;