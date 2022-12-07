import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import commonRoutes from './commonRoutes';
import UserGlobalContext from '../contexts/user';
import signRoutes from './signRoutes';

function Routes() {
  const { user } = useContext(UserGlobalContext);
  const routes = user.uid ? signRoutes : commonRoutes;

  return (
    <RouterProvider router={routes} />
  );
}

export default Routes;
