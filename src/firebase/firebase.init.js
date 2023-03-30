// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtrcRAhYQjLsFd7XO1wUu3yDtuCYlwESE",
  authDomain: "email-password-auth-abf41.firebaseapp.com",
  projectId: "email-password-auth-abf41",
  storageBucket: "email-password-auth-abf41.appspot.com",
  messagingSenderId: "1013571934754",
  appId: "1:1013571934754:web:75e72deaa85a358439087b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;