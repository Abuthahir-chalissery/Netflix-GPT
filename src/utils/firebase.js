// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiiV-z3KvIM-DoVdz1XmJw7WH2KivgYGA",
  authDomain: "netflix-gpt-473bb.firebaseapp.com",
  projectId: "netflix-gpt-473bb",
  storageBucket: "netflix-gpt-473bb.firebasestorage.app",
  messagingSenderId: "681028188786",
  appId: "1:681028188786:web:43a3b19fd959f40173a0eb",
  measurementId: "G-JX5EP0WMDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
