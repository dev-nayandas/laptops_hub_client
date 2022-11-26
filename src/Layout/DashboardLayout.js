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
    <h1>Total user</h1>
   <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {
        users.accountType === "seller" && <li><Link to="/dashboard">My Orders</Link></li>
      }
    
      {/* <li><Link to="/dashboard">My Orders</Link></li> */}

      <li><Link to="/dashboard/allusers">All Users</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;