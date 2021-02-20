import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuHI1TV8-U9d4Xuqp74MX7fVDwVJ7RR54",
    authDomain: "leafy-db18f.firebaseapp.com",
    projectId: "leafy-db18f",
    storageBucket: "leafy-db18f.appspot.com",
    messagingSenderId: "733920634907",
    appId: "1:733920634907:web:0f9704e82ecb99fda130be"
  };

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)  

export const auth = firebase.auth()