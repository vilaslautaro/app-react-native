import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoaOoYvlpbE9xnVjY8D-Q-z5sWgfG82qY",
  authDomain: "alquilaya-c4be7.firebaseapp.com",
  databaseURL: "https://alquilaya-c4be7-default-rtdb.firebaseio.com",
  projectId: "alquilaya-c4be7",
  storageBucket: "alquilaya-c4be7.appspot.com",
  messagingSenderId: "143176244975",
  appId: "1:143176244975:web:6f2e3917a7f3e13860851a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
