import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDcD_68makNvzfG5xkGAv0XBT8iIAbUSiA",
    authDomain: "facebook-clone-12233.firebaseapp.com",
    projectId: "facebook-clone-12233",
    storageBucket: "facebook-clone-12233.appspot.com",
    messagingSenderId: "158519838319",
    appId: "1:158519838319:web:464e119e8717bddb7aaf9a",
};

// Initialize Firebase and check if the app is already initialized or not due to next.js's server side rendering
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { app, db, storage };
