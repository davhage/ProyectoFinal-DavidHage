import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAcIf8rK5MduDmeCEuRi_dZs7hqQEIvOU4',
  authDomain: 'proyctofinal-davidhage.firebaseapp.com',
  projectId: 'proyctofinal-davidhage',
  storageBucket: 'proyctofinal-davidhage.appspot.com',
  messagingSenderId: '988406145975',
  appId: '1:988406145975:web:c59b2280e6dd444c93be32',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
