import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwLFpQwzCxT9z_DdGmCTyeqs1tqMPKVDQ",
  authDomain: "nias-ia-competition-1e820.firebaseapp.com",
  projectId:  "nias-ia-competition-1e820",
  storageBucket: "nias-ia-competition-1e820.appspot.com" ,
  messagingSenderId: "391944228553",
  appId: "1:391944228553:web:ee00454fa7cbfdb392c718",
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage()

export default app