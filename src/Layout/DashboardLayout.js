import React from 'react';
import { Link, Outlet, useLoaderData, useMatches } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const DashboardLayout = () => {
const users= useLoaderData([])
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    
   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">



    {/* {
          users?.accountType?.buyer &&  users?.accountType?.seller?
         <div className=''>
               <li><Link to="/dashboard/orders">My Orders</Link></li> 
         </div>

              : <div>
                  <li><Link to="/dashboard/allusers">All Users</Link></li>
                 
              </div> 
              
            } */}







      {/* {
        users.accountType !== "admin" && <li><Link to="/dashboard">My Orders</Link></li>
      } */}
    
      <li><Link to="/dashboard/orders">My Orders</Link></li>
      <li><Link to="/dashboard/allusers">All Sellers & Buyers</Link></li>
      <li><Link to="/dashboard/addaproduct">Add a Product</Link></li>
      <li><Link to="/dashboard/myproducts">My Products</Link></li>
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;