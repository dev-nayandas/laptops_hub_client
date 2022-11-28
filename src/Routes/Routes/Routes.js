import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Laptops/Laptops";
import Blogs from "../../Pages/Home/Blogs/Blogs";
import Apple from "../../Pages/Home/Brands/Apple";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Laptops from "../../Pages/Laptops/Laptops";
import Samsung from "../../Pages/Home/Brands/Samsung";
import Asus from "../../Pages/Home/Brands/Asus";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import AddAProduct from "../../Pages/Dashboard/AddAProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import Error404 from "../../Pages/Error404/Error404";
import Users from "../../Pages/Dashboard/Users";
import Payment from "../../Pages/Dashboard/Payment";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/apple",
        loader: () =>
          fetch("https://final-project-server-drab.vercel.app/apple"),
        element: (
          <PrivateRoute>
            <Apple></Apple>
          </PrivateRoute>
        ),
      },
      {
        path: "/samsung",

        element: (
          <PrivateRoute>
            <Samsung></Samsung>
          </PrivateRoute>
        ),
      },
      {
        path: "/asus",
        loader: () =>
          fetch("https://final-project-server-drab.vercel.app/asus"),
        element: (
          <PrivateRoute>
            <Asus></Asus>
          </PrivateRoute>
        ),
      },
      {
        path: "/laptops/:category_id",

        element: <Laptops></Laptops>,
        loader: ({ params }) =>
          fetch(
            `https://final-project-server-drab.vercel.app/catagories?category_id=${params.category_id}`
          ),
      },
      {
        path: "*",
        element: <Error404></Error404>,
      },
    ],
  },
  {
    path: "/dashboard",
    loader: () => fetch("https://final-project-server-drab.vercel.app/users"),
    element: (
      <DashboardLayout>
        <Dashboard></Dashboard>
      </DashboardLayout>
    ),
    children: [
      {
        path: "/dashboard/orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/orders/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/allusers",
        loader: () =>
          fetch("https://final-project-server-drab.vercel.app/users"),
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        loader: () =>
          fetch("https://final-project-server-drab.vercel.app/users"),
        element: <Users></Users>,
      },
      {
        path: "/dashboard/addaproduct",

        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "/dashboard/myproducts",

        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);

export default router;
