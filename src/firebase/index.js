import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiksuc8R7_yDyL8o83V9yBvB1hpPfOrEw",
  authDomain: "twitter-clone-c8148.firebaseapp.com",
  projectId: "twitter-clone-c8148",
  storageBucket: "twitter-clone-c8148.appspot.com",
  messagingSenderId: "318354080484",
  appId: "1:318354080484:web:6091b050a942666005a2f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth rferansını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

// veritabanının referansını al
export const db = getFirestore(app);

//storage referansını al
export const storage = getStorage(app);
