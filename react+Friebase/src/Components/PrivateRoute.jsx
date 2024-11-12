import React, { useContext } from 'react';
import AuthProvider from './Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider)
    console.log(user);
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <div>
            <Navigate to='/login' ></Navigate>
        </div>
    );
};

export default PrivateRoute;