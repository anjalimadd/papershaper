/* eslint-disable @typescript-eslint/no-explicit-any */
import  { createContext, useState, ReactNode, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  fetchUserFromDatabase,
  saveUserInDatabase,
} from "../utils/firebaseHelpers";

// Updated User interface with 'photoURL' as optional but 'name' required
interface User {
  name: string;
  email: string;
  photoURL?: string;
}

export interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string; error?: unknown }>;
  googleSignin: () => Promise<boolean>;
  googleSignup: () => Promise<boolean>;
  logout: () => void;
}

const DEFAULT_PHOTO_URL = "https://randomuser.me/api/portraits/men/1.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from sessionStorage when the app initializes
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
      updateUserInState(userData);
      return true;
    } catch (error: any) {
      const errorMessage = error.message || "Login failed. Please try again.";
      console.error(errorMessage);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      const userData = userCredential.user;
      updateUserInState(userData);
      return { success: true, message: "User created successfully." };
    } catch (error) {
      console.error("Error signing up:", error);
      return { success: false, error: error }; // Return the full error object
    }
  };

  const googleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const userData = userCredential.user;

      // Fetch user data from the database
      const existingUser = await fetchUserFromDatabase(userData.email || "");
      if (!existingUser) {
        console.error("User not found in the system.");
        return false;
      }

      updateUserInState(userData);
      return true;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      return false;
    }
  };

  const googleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential: UserCredential & { additionalUserInfo?: any } =
        await signInWithPopup(auth, provider);
      const userData = userCredential.user;

      const isNewUser = userCredential.additionalUserInfo?.isNewUser;
      if (isNewUser) {
        console.info("New user signed up with Google.");
        // Save user data to Firestore with the correct structure
        const userToSave: User = {
          name: userData.displayName || "Unknown", // Ensure 'name' is included
          email: userData.email ?? "Unknown",
          photoURL: userData.photoURL ?? DEFAULT_PHOTO_URL,
        };

        await saveUserInDatabase(userToSave);
      }

      updateUserInState(userData);
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
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        googleSignin,
        googleSignup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
