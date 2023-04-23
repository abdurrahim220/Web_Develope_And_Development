// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN5O6v4V09t_7hxoAghOru56_BpzOiYIM",
  authDomain: "partice-day.firebaseapp.com",
  projectId: "partice-day",
  storageBucket: "partice-day.appspot.com",
  messagingSenderId: "561061759296",
  appId: "1:561061759296:web:aa167ea8fe96cf1f1e12a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;