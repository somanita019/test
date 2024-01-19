// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDotiCMYwP2b07eokApKT2gmy6qIPHVVVs",
  authDomain: "next-js-auth-project.firebaseapp.com",
  projectId: "next-js-auth-project",
  storageBucket: "next-js-auth-project.appspot.com",
  messagingSenderId: "388042049131",
  appId: "1:388042049131:web:524c3ff586f57bda75132e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);