import React from "react";

const AdvertisedItem = ({ item }) => {
  const {
    model,
    img,
    location,
    resalePrice,
    orginalPrice,
    condition,
    usedTime,
    sellerName,
    price,
    MobileNumber,
  } = item;
  return (
    <div className="card w-96 bg-red-100 shadow-xl border-4 border-indigo-200 border-t-indigo-500 mb-5">
      <figure className="px-10 pt-10 w-full">
        <img
          style={{ height: "300px" }}
          src={img}
          alt="laptops"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Model :{model}</h2>
        <p>Location : {location}</p>
        <p>Resale Price : {price}</p>
        <p>Mobile Number : {MobileNumber}</p>
        <p>Location : {location}</p>
        <p>Condition : {condition}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItem;
