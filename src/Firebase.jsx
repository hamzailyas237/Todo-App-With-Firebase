


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJac6t2Uj2NU4-52EzJs5aRfB3m1lh-vk",
    authDomain: "todo-app-with-firebase-11058.firebaseapp.com",
    projectId: "todo-app-with-firebase-11058",
    storageBucket: "todo-app-with-firebase-11058.appspot.com",
    messagingSenderId: "645603383988",
    appId: "1:645603383988:web:e1e0ddd6db2199576cd5e1",
    measurementId: "G-YTXCX21GVH"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }