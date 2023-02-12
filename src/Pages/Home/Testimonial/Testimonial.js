import React from "react";

const Testimonial = () => {
  return (
    <div className="card  bg-base-100  grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3  mt-10 mb-10">
      <div className="card-body items-center text-center bg-red-100  mr-5 mb-6 shadow-xl">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" />
          </div>
        </div>
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <div className="card-body items-center text-center bg-red-100  mr-5 mb-6 shadow-xl">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400" />
          </div>
        </div>
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <div className="card-body items-center text-center bg-red-100   mb-6 shadow-xl">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400" />
          </div>
        </div>
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Testimonial;
