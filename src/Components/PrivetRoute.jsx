import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authentication';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span>...</span>
    }
    if(user){
         return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;