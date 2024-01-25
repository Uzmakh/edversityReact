// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLho4SizmVeEE5FceUCvJrNbZTfFCJlHc",
    authDomain: "edverter-a20fd.firebaseapp.com",
    projectId: "edverter-a20fd",
    storageBucket: "edverter-a20fd.appspot.com",
    messagingSenderId: "241371593611",
    appId: "1:241371593611:web:b0b93847c15960865f4d8e",
    measurementId: "G-TJS7NVX0GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;