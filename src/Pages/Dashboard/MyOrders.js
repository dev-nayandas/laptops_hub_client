import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthProvider, { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyOrders = () => {
  const {user} = useContext(AuthContext);
  
  const url = `http://localhost:5000/orders?email=${user.email}`;
  
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
  
    fetch(url)
    .then(res=>res.json())
    .then(data=>setOrders(data))
   
     
 
  })
  return (
    <div>
      <h1>My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name </th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <div>
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://placeimg.com/192/192/people" />
                    </div>
                  </div>
                </div>
              </td>
              <th>1</th>

              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
