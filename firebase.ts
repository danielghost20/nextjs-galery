// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC7M0anVwNctebSLRR3YXFB9mEg5ihSxg",
  authDomain: "galery-8c322.firebaseapp.com", 
  projectId: "galery-8c322",
  storageBucket: "galery-8c322.appspot.com",
  messagingSenderId: "967438516903",
  appId: "1:967438516903:web:837509df2b345416055182",
  measurementId: "G-6QTZNR352X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
