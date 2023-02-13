import React, { useContext } from "react";
import { Link, Outlet, useLoaderData, useMatches } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAdmin from "../Pages/Hooks/useAdmin";
import useBuyer from "../Pages/Hooks/useBuyer";
import UseRoleCheck from "../Pages/Hooks/UseRoleCheck";
import useSeller from "../Pages/Hooks/useSeller";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <h1 className="text-center text-4xl">
            Click left sidebar links to see details
          </h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isBuyer && (
              <Link to="/dashboard/orders">
                <h3 className="text-3xl text-primary">My Orders</h3>
              </Link>
            )}
            {isAdmin && (
              <Link to="/dashboard/allusers">All Sellers & Buyers</Link>
            )}

            {isSeller && (
              <>
                {" "}
                <Link to="/dashboard/addaproduct">Add a Product</Link>
                <Link to="/dashboard/myproducts">My Products</Link>{" "}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
