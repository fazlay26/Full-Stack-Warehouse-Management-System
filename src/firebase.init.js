// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4eyvLPhtJY6aYr0hbymsBmQrwQmoqwBA",
    authDomain: "bike-manager-4766c.firebaseapp.com",
    projectId: "bike-manager-4766c",
    storageBucket: "bike-manager-4766c.appspot.com",
    messagingSenderId: "399518309274",
    appId: "1:399518309274:web:0a6b3040f5e3023d743823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;