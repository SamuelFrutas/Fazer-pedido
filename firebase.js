import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLU3UNXuPGUFrpmV6syI80ynUHppupeNA",
  authDomain: "samuel-frutas.firebaseapp.com",
  projectId: "samuel-frutas",
  storageBucket: "samuel-frutas.firebasestorage.app",
  messagingSenderId: "475005081261",
  appId: "1:475005081261:web:314ac91f8b0578b995824"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
