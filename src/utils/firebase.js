// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5rgMDZxPKMEbCX4s6Lg0wfxY942jPf1o",
  authDomain: "netflixgpt-4bcde.firebaseapp.com",
  projectId: "netflixgpt-4bcde",
  storageBucket: "netflixgpt-4bcde.firebasestorage.app",
  messagingSenderId: "726889110394",
  appId: "1:726889110394:web:e66550e9abf889788554c3",
  measurementId: "G-WJZ9VS96M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);