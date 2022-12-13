import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Toast from 'components/Toast';
import { UserContextProvider } from 'contexts/user';
import Routes from 'routes';

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
