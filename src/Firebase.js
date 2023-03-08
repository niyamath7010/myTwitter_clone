// import firebase from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyALYPXE9JkKi15Ia5be_FYAPx2RlkFIxhg",
  authDomain: "twitter-clone-655f5.firebaseapp.com",
  databaseURL: "https://twitter-clone-655f5-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-655f5",
  storageBucket: "twitter-clone-655f5.appspot.com",
  messagingSenderId: "871529058793",
  appId: "1:871529058793:web:aeefb42d64148baeea3b78",
  measurementId: "G-H5CGVR1G5Y"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)  

const db = firebaseApp.firestore();

export default db;