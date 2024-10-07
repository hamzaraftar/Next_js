
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyACdzPR1LVBZlIdif_geQ2KacHrCM3EEK8",
  authDomain: "contact-app-acd55.firebaseapp.com",
  projectId: "contact-app-acd55",
  storageBucket: "contact-app-acd55.appspot.com",
  messagingSenderId: "871882768577",
  appId: "1:871882768577:web:bad4f23e1c521cbb551440",
  DatabaseURL:"https://contact-app-acd55-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
