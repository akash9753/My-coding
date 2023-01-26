import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK_KITBD_-hiAPnNsiFOzFU3g3BOch9jA",
  authDomain: "dnaob-reels.firebaseapp.com",
  projectId: "dnaob-reels",
  storageBucket: "dnaob-reels.appspot.com",
  messagingSenderId: "502370529277",
  appId: "1:502370529277:web:3af5443880f1ed6745b394"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export default app;