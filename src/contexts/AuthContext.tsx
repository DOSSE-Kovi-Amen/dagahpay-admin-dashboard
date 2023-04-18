import React, { createContext, useContext, useEffect, useState } from 'react';
import AuthService from '../services/AuthService';
interface AuthProviderProps {
  children: React.ReactNode;
}
export interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setAuthenticated: () => { },
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: any) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
