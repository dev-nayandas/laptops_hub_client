import React from 'react';


const Banner = () => {
    return (
      <div className="hero min-h-[450px] " style={{ backgroundImage: `url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Laptops Hub</h1>
          <p className="mb-5">Laptops Hub is an ultimate solution to buy and sell your old laptop </p>
       
        </div>
      </div>
    </div>
    );
};

export default Banner;