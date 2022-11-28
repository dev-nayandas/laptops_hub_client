import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Pages/Hooks/useAdmin';

const BuyerRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useAdmin(user?.email);
    const location =useLocation()
    if(isLoading || isBuyerLoading){
       return <progress className="progress w-56" value="0" max="100"></progress>


    }
   
    if(user && user?.email && isBuyer) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default BuyerRoute;