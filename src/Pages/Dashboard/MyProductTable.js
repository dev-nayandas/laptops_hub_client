import React from "react";
import toast, { Toaster } from "react-hot-toast";

const MyProductTable = ({ product }) => {
    console.log(product)
    const { ProductName, price, MobileNumber } = product;
    const handleMakeAdd =()=>{
        fetch("http://localhost:5000/advertisedItems", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
              
               
              toast.success("Successfully  maked a add");
              }
            });
    }

  return (
    <div>
      <tr>
        <th></th>
        <td>{ProductName}</td>
        <td>{price}</td>
        <td>{MobileNumber}</td>
        <td>
          <button className="btn btn-info">Delete sales status</button>
        </td>
        <td>
          <button onClick={handleMakeAdd} className="btn btn-info">Make a Add</button>
        </td>
      </tr>
      <Toaster></Toaster>
    </div>
  );
};

export default MyProductTable;
