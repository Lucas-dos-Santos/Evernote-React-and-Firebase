import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import HomePage from '../pages/HomePage';
import NotesPage from '../pages/NotesPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import UserContext from '../contexts/user';

function Routes() {
  const { user } = useContext(UserContext);

  const routes = createBrowserRouter([
    { path: '/', element: user.uid ? <Navigate to="/notes" /> : <HomePage /> },
    { path: '/notes', element: !user.uid ? <Navigate to="/login" /> : <NotesPage /> },
    { path: '/login', element: user.uid ? <Navigate to="/notes" /> : <LoginPage /> },
    { path: '/register', element: user.uid ? <Navigate to="/notes" /> : <RegisterPage /> },

  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default Routes;
