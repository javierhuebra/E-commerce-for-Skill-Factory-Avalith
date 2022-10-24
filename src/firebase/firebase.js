// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp2dDxl8sEE9ATItOln_IbjOunsn03lGA",
  authDomain: "fir-sf-7ef77.firebaseapp.com",
  projectId: "fir-sf-7ef77",
  storageBucket: "fir-sf-7ef77.appspot.com",
  messagingSenderId: "433310922776",
  appId: "1:433310922776:web:5274d4e49202db1a622b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); //app inicializa la aplicacion con las especificaciones