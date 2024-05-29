import 'dotenv/config'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const key = ""

const firebaseConfig = {
    apiKey: key,
    authDomain: "moviedb-61d97.firebaseapp.com",
    projectId: "moviedb-61d97",
    storageBucket: "moviedb-61d97.appspot.com",
    messagingSenderId: "947800172744",
    appId: "1:947800172744:web:579142ce2c36c61b445dfd",
    measurementId: "G-TSR3ZNQKX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }
