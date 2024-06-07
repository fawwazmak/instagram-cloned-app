// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB24wGoEtWX90xdEvc6_opZ2c4ahBrzZ8k",
  authDomain: "instagram-clone-innkeeper.firebaseapp.com",
  projectId: "instagram-clone-innkeeper",
  storageBucket: "instagram-clone-innkeeper.appspot.com",
  messagingSenderId: "1024308078918",
  appId: "1:1024308078918:web:bcee4309467fc4d07c9d47",
  measurementId: "G-ZD03608G0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
