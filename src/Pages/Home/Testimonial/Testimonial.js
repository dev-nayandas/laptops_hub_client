import React from "react";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-white text-4xl text-center p-6 mt-12">Testimonial</h1>
      <div className="card   grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3  mt-10 mb-10">
        <div className="card-body items-center text-center bg-red-100  mr-5 mb-6 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                alt=""
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
            </div>
          </div>
          <h2 className="card-title">James Roy</h2>
          <p>
            "Best place for sell old laptops. I recommend everyone to use this
            site"{" "}
          </p>
        </div>
        <div className="card-body items-center text-center bg-red-100  mr-5 mb-6 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                alt=""
                src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
            </div>
          </div>
          <h2 className="card-title">Robert Hooke</h2>
          <p>
            "The most easiest way to buy an old laptop here. Highly recommend
            the site"
          </p>
        </div>
        <div className="card-body items-center text-center bg-red-100   mb-6 shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                alt=""
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
            </div>
          </div>
          <h2 className="card-title">William Smith</h2>
          <p>
            "All of my friends using Laptops Hub to buy and sell old laptops.
            It's a best solution"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
