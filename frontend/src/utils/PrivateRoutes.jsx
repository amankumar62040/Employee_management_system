import React from 'react';
import { useAuth } from '../context/authContext.jsx';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show loading until verification completes
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
