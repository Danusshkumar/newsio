// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your configuration object here
const firebaseConfig = {
    apiKey: "AIzaSyB7qEHoSso9G1aEzxM8bF-KbgiuTF7NvMA",
    authDomain: "bitshack-2023.firebaseapp.com",
    projectId: "bitshack-2023",
    storageBucket: "bitshack-2023.appspot.com",
    messagingSenderId: "616757101893",
    appId: "1:616757101893:web:fc7145572f0d8024bf6a2c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(app);

// Export the Firebase instance and the database reference
export { app, db };