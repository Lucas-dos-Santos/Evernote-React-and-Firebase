import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoutes from './privateRoutes';
import HomePage from '../pages/HomePage';
import NotesPage from '../pages/NotesPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

function Routes() {
  const routes = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/notes', element: <PrivateRoutes><NotesPage /></PrivateRoutes> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },

  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default Routes;
