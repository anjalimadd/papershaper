// src/contexts/AuthContext.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  applyActionCode,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  UserCredential
} from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase";

interface User {
  name: string;
  email: string;
  photoURL?: string;
  emailVerified: boolean;
}

export interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string; error?: unknown }>;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  sendVerificationEmail: () => Promise<void>;
  verifyEmail: (code: string) => Promise<boolean>;
}

const DEFAULT_PHOTO_URL = "https://randomuser.me/api/portraits/men/1.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updateUserInState = (userData: any) => {
    const updatedUser: User = {
      name: userData.name || "Unknown",
      email: userData.email || "",
      photoURL: userData.photoURL || DEFAULT_PHOTO_URL,
      emailVerified: userData.emailVerified || false,
    };
    setUser(updatedUser);
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;
      
      if (!userData.emailVerified) {
        throw new Error("Please verify your email before logging in");
      }

      updateUserInState(userData);
      return true;
    } catch (error: any) {
      throw new Error(error.message || "Login failed. Please try again.");
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      const userData = userCredential.user;
      
      await sendEmailVerification(userData);
      updateUserInState(userData);
      
      return { 
        success: true, 
        message: "Verification email sent. Please check your inbox." 
      };
    } catch (error) {
      console.error("Error signing up:", error);
      return { success: false, error: error };
    }
  };

  const sendVerificationEmail = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
    }
  };

  const verifyEmail = async (code: string) => {
    try {
      await applyActionCode(auth, code);
      const user = auth.currentUser;
      if (user) await user.reload();
      return true;
    } catch (error) {
      console.error("Email verification failed:", error);
      return false;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error("Error sending password reset email:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        verifyEmail,
        sendVerificationEmail,
        logout,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};