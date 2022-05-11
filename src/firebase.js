import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAbMmA8q_FNU9O5o5TT14pXbyWyudOu_ns",
    authDomain: "diamondsocial-e3d7f.firebaseapp.com",
    projectId: "diamondsocial-e3d7f",
    storageBucket: "diamondsocial-e3d7f.appspot.com",
    messagingSenderId: "364944806512",
    appId: "1:364944806512:web:4797586f6363ee1e1d9ab5"
  }).auth();