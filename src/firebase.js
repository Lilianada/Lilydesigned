// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyDwGjROLRHa55d2K8980Hl7-Y1rgWh43LI",
  authDomain: "designsbylilian.firebaseapp.com",
  projectId: "designsbylilian",
  storageBucket: "designsbylilian.appspot.com",
  messagingSenderId: "734436328985",
  appId: "1:734436328985:web:bd61b7307f366dfb254c88",
  measurementId: "G-0QD8BQTV87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();