import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserGlobalContext from '../contexts/user';

function PrivateRoutes({ children }) {
  const { user } = useContext(UserGlobalContext);

  if (!user.uid) { return <Navigate to="/login" />; }

  return children;
}

export default PrivateRoutes;
