// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNawjP4NomrvHtsCkCnZCV9zNwr--zpOk",
  authDomain: "papershaper-88ac3.firebaseapp.com",
  projectId: "papershaper-88ac3",
  storageBucket: "papershaper-88ac3.firebasestorage.app",
  messagingSenderId: "657092655009",
  appId: "1:657092655009:web:ee8adc8f058005d8313de0",
  measurementId: "G-XD77D6KZVB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default app;
export { analytics, auth, firestore };
