import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification ,
} from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js'



const firebaseConfig = {
  apiKey: "AIzaSyDgUTq4rO93DdpRc7x36wXEXbKeHJOKNn4",
  authDomain: "my-new-project-4f34f.firebaseapp.com",
  projectId: "my-new-project-4f34f",
  storageBucket: "my-new-project-4f34f.appspot.com",
  messagingSenderId: "141683005516",
  appId: "1:141683005516:web:cdee61582fcf4c2f5c7ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification ,
}