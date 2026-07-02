import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2KkJ0alkecMu2oSMuSozuYatN-Nfl-ug",
  authDomain: "underpixel-8932f.firebaseapp.com",
  projectId: "underpixel-8932f",
  storageBucket: "underpixel-8932f.firebasestorage.app",
  messagingSenderId: "318674250578",
  appId: "1:318674250578:web:21044290d6160149ef688b",
  measurementId: "G-06GYS7B5FC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };