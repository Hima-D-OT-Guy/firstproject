// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDa0QH49Lj1KK6iBNNS0OlrpXkeJlHVlJA",
    authDomain: "firstproject-bae16.firebaseapp.com",
    projectId: "firstproject-bae16",
    storageBucket: "firstproject-bae16.firebasestorage.app",
    messagingSenderId: "275273848511",
    appId: "1:275273848511:web:30982e27211ce84f50d80a",
    measurementId: "G-35YQWXDSZ1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };