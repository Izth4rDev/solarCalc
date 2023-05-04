// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXdbqKxvRl2laoK-yK7vD8SwTmjTLd_cw",
  authDomain: "solarcalcuser.firebaseapp.com",
  projectId: "solarcalcuser",
  storageBucket: "solarcalcuser.appspot.com",
  messagingSenderId: "1010398743803",
  appId: "1:1010398743803:web:37e06efb0c9061ac6e345e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    auth,
    db
};