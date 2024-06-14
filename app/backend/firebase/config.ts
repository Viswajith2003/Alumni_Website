// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAs2k1E26BqUxOm4kNeRkoYjXibmWKRxZ4",
  authDomain: "alumini-website-new.firebaseapp.com",
  projectId: "alumini-website-new",
  storageBucket: "alumini-website-new.appspot.com",
  messagingSenderId: "274578849890",
  appId: "1:274578849890:web:8797ef1ffd4c22d513913b",
  measurementId: "G-SNJVW4DZKR",
};

// Check if a Firebase app has already been initialized; if not, initialize a new one
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firestore

export { app, auth, db, storage };
