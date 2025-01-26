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
  apiKey: "AIzaSyAyDLGBvNv1YjIq0HKuOiGrw-dGXcsl3eo",
  authDomain: "papershapers-64595.firebaseapp.com",
  projectId: "papershapers-64595",
  storageBucket: "papershapers-64595.firebasestorage.app",
  messagingSenderId: "164202290994",
  appId: "1:164202290994:web:8c573a00aa28cc47e0412b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default app;
export { analytics, auth, firestore };
