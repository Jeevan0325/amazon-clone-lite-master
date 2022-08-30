import firebase from "https://www.gstatic.com/firebasejs/9.9.3/firebase-SERVICE.js";
// import {initializeApp} from 'firebase/<service>';
// import {initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-SERVICE.js'

const firebaseConfig = {
    apiKey: "AIzaSyB01NMCPncVWvobqgOAlLh2XvoMn8QWFIQ",
    authDomain: "clone-lite.firebaseapp.com",
    projectId: "clone-lite",
    storageBucket: "clone-lite.appspot.com",
    messagingSenderId: "65974405632",
    appId: "1:65974405632:web:bf33ee062b7f7feff2e6e5",
    measurementId: "G-02R1VNY5MC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();


export { db, auth };