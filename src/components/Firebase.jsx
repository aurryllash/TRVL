// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi-oY4-ogKdRnH_nhh4kecWOIysBdQlTI",
  authDomain: "trvl-dc6e4.firebaseapp.com",
  projectId: "trvl-dc6e4",
  storageBucket: "trvl-dc6e4.appspot.com",
  messagingSenderId: "164679288139",
  appId: "1:164679288139:web:fa6b8350f68669bb9b54ce",
  measurementId: "G-966YKSPHB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);