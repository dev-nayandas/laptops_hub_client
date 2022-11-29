import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const BookingModal = ({ item }) => {
  console.log(item);
  const {
    model,
    img,
    location,
    resalePrice,
    orginalPrice,
    usedTime,
    sellerName,
  } = item;

  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;

    const number = form?.number?.value;
    const location = form?.location?.value;

    const laptop = {
      email,
      model,
      resalePrice,
      img,
      number,
      location,
    };
    console.log(laptop);

    fetch("https://final-project-server-drab.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(laptop),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("successfully booked");
        }
      });

    form.reset();
  };
  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{model}</h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-clos-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="email"
              disabled
              value={user?.email}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="model"
              disabled
              value={model}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="resalePrice"
              disabled
              value={resalePrice}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="img"
              disabled
              value={img}
              placeholder="image url"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="number"
              placeholder="your phone number"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="location"
              placeholder="your location"
              className="input input-bordered w-full "
            />
            <br />

            <>
              {" "}
              <button className="btn btn-primary w-full " value="Submit">
                Submit
              </button>
            </>
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default BookingModal;
