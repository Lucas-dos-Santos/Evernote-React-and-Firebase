import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import publicRoutes from './publicRoutes';
import UserGlobalContext from '../contexts/user';
import privateRoutes from './privateRoutes';

function Routes() {
  const { user } = useContext(UserGlobalContext);
  const routes = user.uid ? privateRoutes : publicRoutes;

  return (
    <RouterProvider router={routes} />
  );
}

export default Routes;
