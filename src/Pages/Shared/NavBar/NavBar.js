import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#13005A] text-white">
      <div className="navbar-start">
        <div className="dropdown text-black">
          <label tabIndex={0} className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            {user?.email ? (
              <div className="">
                {/* <li>
                  <Link to="dashboard no-underline" className="link">
                    Dashboard
                  </Link>
                </li> */}
                <li>
                  <Link onClick={handleSignOut} className="link no-underline">
                    Sign Out
                  </Link>
                </li>
              </div>
            ) : (
              <div>
                <li >
                  <Link className="link no-underline" to="/login">
                    Login
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-3xl">
          Laptops Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          {user?.email ? (
            <div className="flex">
              {/* <li>
                <Link to="dashboard" className="link no-underline">
                  Dashboard
                </Link>
              </li> */}
              <li>
                <Link onClick={handleSignOut} className="link no-underline">
                  Sign Out
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link className="link no-underline" to="/login">
                  Login
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
      {/* <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label> */}
    </div>
  );
};

export default NavBar;
