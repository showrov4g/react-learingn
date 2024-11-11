// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5EQdE9ZQUuJqu59ykIUkIj2JP8XjXyuk",
  authDomain: "second-project-1234b.firebaseapp.com",
  projectId: "second-project-1234b",
  storageBucket: "second-project-1234b.firebasestorage.app",
  messagingSenderId: "126596088460",
  appId: "1:126596088460:web:8ce80ea4b1de994769f1a9",
  measurementId: "G-2LKVY2D4PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service 


export const auth = getAuth(app);