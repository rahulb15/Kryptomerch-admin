import React from "react";
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { isLoading, isAuth, error } = useSelector(
        (state) => state.loginStatus
    );
    let location = useLocation();
    if (!isAuth) {
        return <Navigate to="/sign-in" state={{ from: location }} replace />
    }
    return children
};

export default ProtectedRoute;