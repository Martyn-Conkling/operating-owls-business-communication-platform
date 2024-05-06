/*
    Here is some useful information to understand what is going on here better.
    - Firebase
        - https://firebase.google.com/docs/firestore/query-data/get-data
*/

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //for authentication
import { getFirestore } from "firebase/firestore" //for database storage

// ENV are stored in .env.local file
// All this information can be found in firebase
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDom = import.meta.env.VITE_AUTH_DOM;
const projId = import.meta.env.VITE_PROJ_ID;
const storage = import.meta.env.VITE_STORAGE_BUCKET;
const msgSender = import.meta.env.VITE_MSG_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDom,
    projectId: projId,
    storageBucket: storage,
    messagingSenderId: msgSender,
    appId: appId
};

// Initialize Firebase
let db, auth;
try {
    const app = initializeApp(firebaseConfig);

    auth = getAuth(app);

    db = getFirestore(app);

} catch (e) {
    console.log("Error: ", e);
}

export { auth, db };
