import React from 'react';
import { UserContextProvider } from './user/context';

function GlobalContext({ children }) {
  return <UserContextProvider>{children}</UserContextProvider>;
}

export default GlobalContext;
