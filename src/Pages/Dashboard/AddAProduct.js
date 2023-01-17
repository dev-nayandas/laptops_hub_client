import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const model = form.model.value;
    const img = form.img.value;
    const price = form.price.value;
    const condition = form.condition.value;
    const location = form.location.value;
    const MobileNumber = form.MobileNumber.value;
    const description = form.description.value;
    const email = user.email;
    const product = {
      model,
      email,
      img,
      price,
      condition,
      location,
      MobileNumber,
      description,
    };
    console.log(product);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/dashboard/myproducts");
          toast.success("Service added successfully");
        }
      });

    form.reset();
  };
  return (
    <div>
      <div>
        <h1>Add a Product</h1>
      </div>
      <div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Please Add a Product</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      name="model"
                      placeholder="Product Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image Url</span>
                    </label>
                    <input
                      type="text"
                      name="img"
                      placeholder="imageUrl"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Condition</span>
                    </label>
                    <input
                      type="text"
                      name="condition"
                      placeholder="excellent , good , fair"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Mobile Number</span>
                    </label>
                    <input
                      type="text"
                      name="MobileNumber"
                      placeholder="Mobile Number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="location"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Add a product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default AddAProduct;
