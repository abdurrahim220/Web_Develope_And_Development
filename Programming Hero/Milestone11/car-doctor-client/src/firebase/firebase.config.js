// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDle6QsNYOnduiVODdNJ0le7cUW4TZFg6M",
  authDomain: "car-doctor-d9065.firebaseapp.com",
  projectId: "car-doctor-d9065",
  storageBucket: "car-doctor-d9065.appspot.com",
  messagingSenderId: "1041252778401",
  appId: "1:1041252778401:web:9c77bfc85c106a8a1d0be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;