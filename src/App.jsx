import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './components/Toast';
import GlobalContext from './contexts';
import Routes from './routes';

function App() {
  return (
    <>
      <Toast />
      <GlobalContext>
        <Routes />
      </GlobalContext>
    </>
  );
}

export default App;
