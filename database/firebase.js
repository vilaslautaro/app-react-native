import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DATABASE_URL,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID,
} from '@env';

const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DATABASE_URL,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
