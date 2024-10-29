// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
     apiKey: "AIzaSyA3t0WptkRixVe7Qk6OSEZ6P5R5RAjTb8I",
     authDomain: "invitation-g.firebaseapp.com",
     projectId: "invitation-g",
     storageBucket: "invitation-g.appspot.com",
     messagingSenderId: "834073772065",
     appId: "1:834073772065:web:09a1043949e5c9f4722360",
     measurementId: "G-1VXMSB6XP0"
   };

   const app = initializeApp(firebaseConfig);

   // Firestore’u başlat
   const db = getFirestore(app);
   
   export { db, serverTimestamp };