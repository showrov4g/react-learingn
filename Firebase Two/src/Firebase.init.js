// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2g2610Dqrcskn8KCP7JjlILlvTFTwV4A",
  authDomain: "fir-learning-86d79.firebaseapp.com",
  projectId: "fir-learning-86d79",
  storageBucket: "fir-learning-86d79.firebasestorage.app",
  messagingSenderId: "722724613075",
  appId: "1:722724613075:web:b122bd7b405e1fae635d26",
  measurementId: "G-WE59VLY9D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export default auth;