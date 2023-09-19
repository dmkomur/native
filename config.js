import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4RWaA9A-ObQi2ms9pIKGS1WUF_d6EKXE",
  authDomain: "native-399116.firebaseapp.com",
  databaseURL: "<https://native-399116.firebaseio.com>",
  projectId: "native-399116",
  storageBucket: "native-399116.appspot.com",
  messagingSenderId: "342145281678",
  appId: "1:342145281678:web:fe629736f151b048a263df",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
