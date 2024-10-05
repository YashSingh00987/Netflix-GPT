// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDds5if3J_3HfKUNZg9pJ7lQBBLH_G6UdA",
  authDomain: "netflixgpt-30d97.firebaseapp.com",
  projectId: "netflixgpt-30d97",
  storageBucket: "netflixgpt-30d97.appspot.com",
  messagingSenderId: "648781351760",
  appId: "1:648781351760:web:3d4d15ee795d133d54fa55",
  measurementId: "G-4NMNWNG3YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();