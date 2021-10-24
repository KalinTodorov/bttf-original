import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBvYE96RTENRO1HW7Xd-OFyrc6833MNS4k',
  authDomain: 'bttf-ranking-original.firebaseapp.com',
  projectId: 'bttf-ranking-original',
  storageBucket: 'bttf-ranking-original.appspot.com',
  messagingSenderId: '299739040042',
  appId: '1:299739040042:web:6d4f1dd02ff8d3cf1cf653',
  measurementId: 'G-BZKPJZJM9N',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { app, db };
