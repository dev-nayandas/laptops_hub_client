import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Pages/Hooks/useAdmin';

const SellerRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useAdmin(user?.email);
    const location =useLocation()
    if(isLoading || isSellerLoading){
       return <progress className="progress w-56" value="0" max="100"></progress>


    }
   
    if(user && user?.email && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default SellerRoute;