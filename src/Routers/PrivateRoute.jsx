import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProviders';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate  state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;