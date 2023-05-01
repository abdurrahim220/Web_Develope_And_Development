// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDEqsAdz4yW4Rev5xPAcAJ30U5QfUY6mQw",
  authDomain: "news-dragon-e56bb.firebaseapp.com",
  projectId: "news-dragon-e56bb",
  storageBucket: "news-dragon-e56bb.appspot.com",
  messagingSenderId: "202878164152",
  appId: "1:202878164152:web:c838e2713025dde37b684d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;