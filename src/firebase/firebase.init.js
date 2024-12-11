// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJZ0-RBpI0OX1cn9to82tC20fbZ_36a4",
  authDomain: "japanes-language.firebaseapp.com",
  projectId: "japanes-language",
  storageBucket: "japanes-language.firebasestorage.app",
  messagingSenderId: "626260810619",
  appId: "1:626260810619:web:8d9589703514080bb3fbde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;