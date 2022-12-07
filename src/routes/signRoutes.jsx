import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotesPage from '../pages/NotesPage';
import EditUserPage from '../pages/EditUserPage';

const signRoutes = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/users/edit', element: <EditUserPage /> },
  { path: '/notes', element: <NotesPage /> },
]);

export default signRoutes;
