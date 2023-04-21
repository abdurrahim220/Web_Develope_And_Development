// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHv60shiJjPc2zeiYUOGJyXsfUCr2NX9s",
  authDomain: "recap-first-firebase.firebaseapp.com",
  projectId: "recap-first-firebase",
  storageBucket: "recap-first-firebase.appspot.com",
  messagingSenderId: "815423224063",
  appId: "1:815423224063:web:49dfcae3c9bfd1c305f4ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;