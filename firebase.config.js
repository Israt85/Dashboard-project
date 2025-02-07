// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPV4eSLD5MkGN4HHLaWDa_8qJxOYJrptI",
  authDomain: "dashboard-project-bad94.firebaseapp.com",
  projectId: "dashboard-project-bad94",
  storageBucket: "dashboard-project-bad94.firebasestorage.app",
  messagingSenderId: "245690625967",
  appId: "1:245690625967:web:30f54036746a060b8d495a",
  measurementId: "G-7SML4EZ9VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);