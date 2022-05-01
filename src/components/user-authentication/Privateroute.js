import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebaseauth from './useFirebaseauth';

const Privateroute = ({ children }) => {
    const location = useLocation();
    const { user } = useFirebaseauth();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default Privateroute;