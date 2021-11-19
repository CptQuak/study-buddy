import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useError } from './useError';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { dispatchError } = useError();
  useEffect(() => {
    const token = localStorage.getItem('__be_token__');
    if (token) {
      (async () => {
        try {
          const res = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data);
        } catch (e) {}
      })();
    }
  }, []);
  const signIn = async ({ login, password }) => {
    try {
      const res = await axios.post('/login', {
        login,
        password,
      });
      setUser(res.data);
    } catch (e) {
      console.log('i gowno');
      dispatchError('Invalid email or password');
    }
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem('__be_token__');
  };
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('UseAuth is required inside AuthContext');
  }
  return auth;
};
