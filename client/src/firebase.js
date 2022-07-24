// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import {getStorage} from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBGH03nUqecWcSASxPyEXo6t4oTlslYbmM",

  authDomain: "alwain-2022.firebaseapp.com",

  projectId: "alwain-2022",

  storageBucket: "alwain-2022.appspot.com",

  messagingSenderId: "689910782051",

  appId: "1:689910782051:web:9b940dcc412a30dc938056",

  measurementId: "G-6H0D53K4ZC"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);