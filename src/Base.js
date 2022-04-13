import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyAcYKX8zGFfLpJ4Xgg-sp4fsm5TWBaaXP0",
    authDomain: "my-lsetf-project.firebaseapp.com",
    projectId: "my-lsetf-project",
    storageBucket: "my-lsetf-project.appspot.com",
    messagingSenderId: "773755106694",
    appId: "1:773755106694:web:9f2fd13b6bae466eb6a807"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);