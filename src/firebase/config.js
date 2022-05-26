import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0TTdnjqVHg-fU0Wi5ZLm6C9TIgBBpDbU",
  authDomain: "kimquy-4e78c.firebaseapp.com",
  projectId: "kimquy-4e78c",
  storageBucket: "kimquy-4e78c.appspot.com",
  messagingSenderId: "914545086195",
  appId: "1:914545086195:web:dad37df66254ea4ddcf186",
  measurementId: "G-WT58GQQQCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
