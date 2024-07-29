import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore"; 
import {getAuth} from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBKzsQJDT0XydteDhnimRtplATIhmKk3EM",
    authDomain: "sample-2342a.firebaseapp.com",
    projectId: "sample-2342a",
    storageBucket: "sample-2342a.appspot.com",
    messagingSenderId: "469995869494",
    appId: "1:469995869494:web:106287f45151e9a9ed0f97"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)