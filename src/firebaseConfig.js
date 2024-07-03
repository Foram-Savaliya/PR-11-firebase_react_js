import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCIQgvrW15LHXfe7sCWaU8WvL1FIUOZ1s",
  authDomain: "student-crud-db.firebaseapp.com",
  projectId: "student-crud-db",
  storageBucket: "student-crud-db.appspot.com",
  messagingSenderId: "858319954060",
  appId: "1:858319954060:web:750d7a5b6e102557cb1ba9",
  measurementId: "G-VXGS3K3D36"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);