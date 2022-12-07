import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';

const DEFAULT_VALUES = {
  user: {
    uid: '',
    email: '',
  },
};

const UserContext = createContext(DEFAULT_VALUES);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(DEFAULT_VALUES.user);

  const value = useMemo(() => ({
    user, setUser,
  }), [user]);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('user');
    if (storagedUser) { setUser(JSON.parse(storagedUser)); }
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
