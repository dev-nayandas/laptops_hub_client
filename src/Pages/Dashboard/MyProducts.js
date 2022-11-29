import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyProductTable from "./MyProductTable";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const { user ,isLoading} = useContext(AuthContext);
  useEffect(() => {
    if(isLoading){
      return <progress className="progress w-56" value="0" max="100"></progress>


   }
   if(user && user?.email ) {
    const url = `http://localhost:5000/products?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
}

    
  }, []);
  let { ProductName } = products;
  console.log(ProductName);
  return (
    <div >
      <div>
        <div>
          <h1>All Product</h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
                <th>Make Add</th>
              </tr>
            </thead> */}
              <tbody>
                <td>
                  {products.map((product) => (
                    <MyProductTable
                      key={product._id}
                      product={product}
                    ></MyProductTable>
                  ))}
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
