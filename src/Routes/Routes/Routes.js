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

const router  = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
           
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/apple',
                loader: () => fetch("http://localhost:5000/apple"),
                element: <PrivateRoute><Apple></Apple></PrivateRoute>
            },
            {
                path:'/samsung',
              
                element: <PrivateRoute><Samsung></Samsung></PrivateRoute>
            },
            {
                path:'/asus',
                loader: () => fetch("http://localhost:5000/asus"),
                element: <PrivateRoute><Asus></Asus></PrivateRoute>
            },
            {
                path:'/laptops/:category_id',
              
                element: <Laptops></Laptops>,
                loader: ({params}) => fetch(`http://localhost:5000/catagories?category_id=${params.category_id}`),
            },
        ]
    },
    {
        
        path:'/dashboard',
        loader: () => fetch("http://localhost:5000/users"),
        element: <DashboardLayout><Dashboard></Dashboard></DashboardLayout>,
        children: [
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allusers',
                loader: () => fetch("http://localhost:5000/users"),
                element:<AllUsers></AllUsers>
            },
        ] 
        
    },
])

export default router