import React, { createContext, useState, useMemo } from 'react';

const DEFAULT_VALUES = {
  state: {
    uid: '',
    email: '',
  },
};

const UserContext = createContext(DEFAULT_VALUES);

export function UserContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUES.state);

  const value = useMemo(() => ({
    state, setState,
  }), [state]);

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
