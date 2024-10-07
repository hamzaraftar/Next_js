// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firestore, { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACdzPR1LVBZlIdif_geQ2KacHrCM3EEK8",
  authDomain: "contact-app-acd55.firebaseapp.com",
  projectId: "contact-app-acd55",
  storageBucket: "contact-app-acd55.appspot.com",
  messagingSenderId: "871882768577",
  appId: "1:871882768577:web:bad4f23e1c521cbb551440",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
