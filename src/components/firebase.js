// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc_jM_gqCCgoFIvkAvBGuQT3FzfEVTol8",
    authDomain: "yonathanarnon.firebaseapp.com",
    projectId: "yonathanarnon",
    storageBucket: "yonathanarnon.appspot.com",
    messagingSenderId: "332316493865",
    appId: "1:332316493865:web:1a07942d9cdac11852b438",
    measurementId: "G-39Q08YBD2F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;




