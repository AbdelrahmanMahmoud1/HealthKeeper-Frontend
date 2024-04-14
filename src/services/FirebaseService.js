// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createContext } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPvnhrqHg7Z0yDAH3eT3TTjKgiy9br_3o",
  authDomain: "first-data-base-94a72.firebaseapp.com",
  databaseURL: "https://first-data-base-94a72-default-rtdb.firebaseio.com",
  projectId: "first-data-base-94a72",
  storageBucket: "first-data-base-94a72.appspot.com",
  messagingSenderId: "230595747981",
  appId: "1:230595747981:web:b371d7281bf611f5e402c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

