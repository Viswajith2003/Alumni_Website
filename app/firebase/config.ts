// Import the functions you need from the SDKs you need

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Check if a Firebase app has already been initialized; if not, initialize a new one
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);

export { app, auth };

