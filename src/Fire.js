// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU1Yp32se7eQV6AD0EYEtLhdV5JyIALjw",
  authDomain: "car-dealer-a6d30.firebaseapp.com",
  projectId: "car-dealer-a6d30",
  storageBucket: "car-dealer-a6d30.appspot.com",
  messagingSenderId: "581685664141",
  appId: "1:581685664141:web:f29b7ee953f74559bf45c4",
  measurementId: "G-0V0QHDYEVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app