import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage";




const firebaseConfig = {
    apiKey: "AIzaSyAIxV8g9ebrMkUktNX4k3maPdhZhYiZ4Ik",
    authDomain: "facebook-clone-c26c8.firebaseapp.com",
    projectId: "facebook-clone-c26c8",
    storageBucket: "facebook-clone-c26c8.appspot.com",
    messagingSenderId: "1006326625114",
    appId: "1:1006326625114:web:598ac82bb26f879f7cf963",
    measurementId: "G-WPPLSNBHWD"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db,storage};