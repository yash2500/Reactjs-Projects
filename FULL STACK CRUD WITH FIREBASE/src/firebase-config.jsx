import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqOEnKPOpAjHPOMbNrJ3VN1tNxV4BxW1c",
  authDomain: "react-crud-2ea14.firebaseapp.com",
  projectId: "react-crud-2ea14",
  storageBucket: "react-crud-2ea14.appspot.com",
  messagingSenderId: "395944726354",
  appId: "1:395944726354:web:73c35c97f542a9ce02748b",
  measurementId: "G-TXWECT767E"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);