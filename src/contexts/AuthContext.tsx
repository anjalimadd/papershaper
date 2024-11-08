/* eslint-disable react-refresh/only-export-components */
// src/contexts/AuthContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface User {
  name?: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(sessionStorage.getItem('user') || 'null')
  );

  const login = (email: string, password: string) => {
    if (email === 'test@example.com' && password === 'password123') {
      const userData = { email };
      setUser(userData);
      sessionStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string) => {
    const userData = { name, email };
    setUser(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
