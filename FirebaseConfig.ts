// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCspks9hhCVRmQB2RAtfJDli0QJ5Tqyk3o",
  authDomain: "ppam-gawk.firebaseapp.com",
  projectId: "ppam-gawk",
  storageBucket: "ppam-gawk.appspot.com",
  messagingSenderId: "773060416226",
  appId: "1:773060416226:web:d0a6189ca89cebf2b204bb",
  measurementId: "G-N8EQ5H0TLM"
};


export const firebaseApp = initializeApp(firebaseConfig);
initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
