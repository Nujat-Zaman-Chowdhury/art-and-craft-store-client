// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwxqaXziVnf1tSjXrBNcyy1YjEtmHhTCE",
  authDomain: "art-and-craft-4592e.firebaseapp.com",
  projectId: "art-and-craft-4592e",
  storageBucket: "art-and-craft-4592e.appspot.com",
  messagingSenderId: "76546049341",
  appId: "1:76546049341:web:456cf93bee39ffbffab154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;