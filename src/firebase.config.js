import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ2jPmgyhLT5aZTAdlJbg-U9se5Wgp_Js",
  authDomain: "house-marketplace-app-84a10.firebaseapp.com",
  projectId: "house-marketplace-app-84a10",
  storageBucket: "house-marketplace-app-84a10.appspot.com",
  messagingSenderId: "1062068638042",
  appId: "1:1062068638042:web:d29e84a18df81ccb18a363"
};

// Initialize Firebase  
export const app = initializeApp(firebaseConfig);
export const db= getFirestore()