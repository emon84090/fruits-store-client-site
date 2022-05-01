
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBqTrJEjeVLPCGpulo63d7i7X7w3D0Z3gc",
    authDomain: "fruits-store-4b19b.firebaseapp.com",
    projectId: "fruits-store-4b19b",
    storageBucket: "fruits-store-4b19b.appspot.com",
    messagingSenderId: "577439294265",
    appId: "1:577439294265:web:7a9b7d054a832d2b93fee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
