import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Laptops from "../../Laptops/Laptops";

const Categories = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categoriesName")
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-yellow-800 text-3xl text-center p-6 mt-12">
          Categories By Brand
        </h2>
      </div>
      <div className="">
        {/* {
                    name.map(catagory => <Laptops
                    key={catagory._id}
                    catagory={catagory}

                    ></Laptops>)
                 } */}

        <div className="grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Link to="/apple">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Apple!</h2>
                <p>See the all Products of apple to buy</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/samsung">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Samsung!</h2>
                <p>See the all Products of Samsung to buy</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/asus">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img
                  src="https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Asus!</h2>
                <p>See the all Products of Asus to buy</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* <Link to="/apple" className="px-4">
          <button className="btn btn-outline btn-primary ">Apple</button>
        </Link>

        <Link to="/samsung" className="px-4">
          <button className="btn btn-outline btn-primary ">Samsung</button>
        </Link>

        <Link to="/asus" className="px-4">
          <button className="btn btn-outline btn-primary ">Asus</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Categories;
