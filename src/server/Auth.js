// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVHfFnrvboniMdoH0phiJwpGJfa-ZnR2k",
    authDomain: "themoviedb-e87fc.firebaseapp.com",
    databaseURL: "https://themoviedb-e87fc-default-rtdb.firebaseio.com",
    projectId: "themoviedb-e87fc",
    storageBucket: "themoviedb-e87fc.appspot.com",
    messagingSenderId: "947542397682",
    appId: "1:947542397682:web:ebeed286f45a811d05b66b",
    measurementId: "G-Y4S7SFNMRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }