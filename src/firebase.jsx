import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAJRK4tOTCcdY-Gy6Pglf3mIqYX89pceVY",
    authDomain: "store-tutorial-c250b.firebaseapp.com",
    projectId: "store-tutorial-c250b",
    storageBucket: "store-tutorial-c250b.appspot.com",
    messagingSenderId: "473704181643",
    appId: "1:473704181643:web:b3cdca9b98fb9f6748098e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);