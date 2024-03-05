// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvMCw48fFpK2f33hZ53Uk3aOoEeYABcn4",
  authDomain: "vite-contact-c9be4.firebaseapp.com",
  projectId: "vite-contact-c9be4",
  storageBucket: "vite-contact-c9be4.appspot.com",
  messagingSenderId: "456367595339",
  appId: "1:456367595339:web:18dae4db038a66eab8d2ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
