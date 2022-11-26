import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export default Routes;
