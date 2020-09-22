import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyApbmxFFaKAV8_JKoI1BeiqOyGtQOMxbCY",
  authDomain: "whatsapp-clone-c4b72.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-c4b72.firebaseio.com",
  projectId: "whatsapp-clone-c4b72",
  storageBucket: "whatsapp-clone-c4b72.appspot.com",
  messagingSenderId: "543778908892",
  appId: "1:543778908892:web:c6784b4e17def78edfe219",
  measurementId: "G-75X0BLR5Z0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize app
const db = firebaseApp.firestore(); // for database
const auth = firebase.auth(); // for login
const provider = new firebase.auth.GoogleAuthProvider(); //google authentication

export { auth, provider };
export default db;
