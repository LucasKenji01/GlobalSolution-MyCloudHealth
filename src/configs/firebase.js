import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBe9QdOtXNMThJYDDvveI2Pii9-7aPIT-4",
  authDomain: "mycloudhealth.firebaseapp.com",
  projectId: "mycloudhealth",
  storageBucket: "mycloudhealth.appspot.com",
  messagingSenderId: "482421343908",
  appId: "1:482421343908:web:bc51a5c7dca879fbd58831",
  databaseURL: "https://mycloudhealth-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);