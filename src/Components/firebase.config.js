// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDRQA05mAN-OzHGamwKY2BW9x3zv_yPww",
  authDomain: "auth-first-project-152a2.firebaseapp.com",
  projectId: "auth-first-project-152a2",
  storageBucket: "auth-first-project-152a2.firebasestorage.app",
  messagingSenderId: "146470681606",
  appId: "1:146470681606:web:ea5a79bd06f9e502f09787"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;