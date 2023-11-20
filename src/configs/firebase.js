// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe9QdOtXNMThJYDDvveI2Pii9-7aPIT-4",
  authDomain: "mycloudhealth.firebaseapp.com",
  projectId: "mycloudhealth",
  storageBucket: "mycloudhealth.appspot.com",
  messagingSenderId: "482421343908",
  appId: "1:482421343908:web:bc51a5c7dca879fbd58831"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();