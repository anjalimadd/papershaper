import React, { createContext, useState, ReactNode } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase"; // Import your Firebase configuration

interface User {
  name?: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  googleSignup: () => Promise<boolean>;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(sessionStorage.getItem("user") || "null")
  );

  // Firebase login function
  const login = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;
      setUser({ email: userData.email || "" });
      sessionStorage.setItem("user", JSON.stringify({ email: userData.email }));
      return true;
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  };

  // Firebase signup function for email/password
  const signup = async (name: string, email: string, password: string) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      console.log("User credentials:", userCredential);
      setUser({ name, email });
      sessionStorage.setItem("user", JSON.stringify({ name, email }));
      return true;
    } catch (error) {
      console.error("Error signing up:", error);
      return false;
    }
  };

  // Firebase signup function for Google OAuth
  const googleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential: UserCredential = await signInWithPopup(
        auth,
        provider
      );
      const userData = userCredential.user;
      const name = userData.displayName || "";
      const email = userData.email || "";
      setUser({ name, email });
      sessionStorage.setItem("user", JSON.stringify({ name, email }));
      return true;
    } catch (error) {
      console.error("Error signing up with Google:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, googleSignup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
