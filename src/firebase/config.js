// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBTVD00cKQX4MkioKkIKMgJjcGzHRHF_eU',
    authDomain: 'react-cursos-12423.firebaseapp.com',
    projectId: 'react-cursos-12423',
    storageBucket: 'react-cursos-12423.appspot.com',
    messagingSenderId: '475016300861',
    appId: '1:475016300861:web:4407f21ffda7a583e39d54',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
