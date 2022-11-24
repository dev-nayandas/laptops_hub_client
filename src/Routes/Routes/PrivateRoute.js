import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user && user?.email){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;