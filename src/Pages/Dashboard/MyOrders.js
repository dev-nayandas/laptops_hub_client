import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthProvider, {
  AuthContext,
} from "../../Context/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>Brand</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  {" "}
                  <div>
                    <div className="avatar">
                      <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={order.img} />
                      </div>
                    </div>
                  </div>
                </td>
                <th>{order.model}</th>

                <td>${order.resalePrice}</td>
                <td>Brand</td>
                <td>
                  <Link to="/dashboard/orders/payment">
                    <button className="btn btn-outline btn-info">Pay</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
