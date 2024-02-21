/*
    Here is some useful information to understand what is going on here better.
    - Firebase
        - https://firebase.google.com/docs/firestore/query-data/get-data
*/

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //for authentication
import { getFirestore } from "firebase/firestore" //for database storage

const firebaseConfig = {
    /*get from firebase*/
    
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
