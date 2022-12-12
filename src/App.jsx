import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from 'routes';
import Toast from 'components/Toast';
import { UserContextProvider } from 'contexts/user';

function App() {
  return (
    <>
      <Toast />
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </>
  );
}

export default App;
