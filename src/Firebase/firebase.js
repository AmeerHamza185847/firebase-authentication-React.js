
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAUWmhYiJdfUCCPYhRBzu79CR3ZidfJClY",
  authDomain: "fir-authentication-fcc33.firebaseapp.com",
  projectId: "fir-authentication-fcc33",
  storageBucket: "fir-authentication-fcc33.appspot.com",
  messagingSenderId: "1063346118096",
  appId: "1:1063346118096:web:1ad772dfd496a04ac32dd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);