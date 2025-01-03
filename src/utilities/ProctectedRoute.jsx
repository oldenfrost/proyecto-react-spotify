import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();
  
    if (!isAuthenticated) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;