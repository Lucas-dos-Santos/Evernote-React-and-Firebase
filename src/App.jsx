import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import Toast from './components/Toast';
import GlobalContext from './context';
import Routes from './routes';

function App() {
  return (
    <>
      <Toast />
      <GlobalContext>
        <RouterProvider router={Routes} />
      </GlobalContext>
    </>
  );
}

export default App;
