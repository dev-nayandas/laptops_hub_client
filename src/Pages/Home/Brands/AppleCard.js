import React from "react";

const AppleCard = ({ apple, setItem }) => {
  const {
    model,
    img,
    location,
    resalePrice,
    orginalPrice,
    usedTime,
    sellerName,
  } = apple;
  return (
    <div className="card w-96 bg-base-100 shadow-xl bg-black text-accent mb-6">
      <figure>
        <img
          style={{ height: "400px", width: "500px" }}
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Model :{model}</h2>
        <p>Location :{location}</p>
        <p>Price: {resalePrice}</p>
        <p>Merket Price: {orginalPrice}</p>
        <p>Total Used Time: {usedTime}</p>
        <p> Seller Name: {sellerName}</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setItem(apple)}
            htmlFor="bookingModal"
            className="btn btn-primary"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppleCard;
