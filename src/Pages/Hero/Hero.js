import React from "react";

const Hero = () => {
  return (
    <div className="grid place-items-center">
      <div
        className="hero mb-12 w-3/4  "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Buy and sell</h1>
            <p className="mb-5">
              Buy or sell your old laptop. Don't though your old laptop on the
              garbage, make money by selling it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
