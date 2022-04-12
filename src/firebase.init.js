// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA79vYEfgbbCJKGX627kFR88ELYO6Q8bMI",
  authDomain: "ema-john-with-router-fir-b9bf0.firebaseapp.com",
  projectId: "ema-john-with-router-fir-b9bf0",
  storageBucket: "ema-john-with-router-fir-b9bf0.appspot.com",
  messagingSenderId: "680190584072",
  appId: "1:680190584072:web:5207f11761de1756a8f8bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;