
// Part 2: Firebase code starts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsFl9gNt0CvgLIKoVXUUkouifGelACQH8",
  authDomain: "cprg306-assignments-a29a2.firebaseapp.com",
  projectId: "cprg306-assignments-a29a2",
  storageBucket: "cprg306-assignments-a29a2.firebasestorage.app",
  messagingSenderId: "385009162064",
  appId: "1:385009162064:web:c4fc9f8c03e9a1751f7e55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
