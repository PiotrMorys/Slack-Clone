import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGwhs6dNUMt_2vbp0NMX5IVsPWGVjqmws",
    authDomain: "slack-clone-66937.firebaseapp.com",
    projectId: "slack-clone-66937",
    storageBucket: "slack-clone-66937.appspot.com",
    messagingSenderId: "557223093203",
    appId: "1:557223093203:web:d29284a2575a77c29e4526"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };