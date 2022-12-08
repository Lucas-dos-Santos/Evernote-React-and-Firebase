import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';

const UserContext = createContext({ user: {} });

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

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
