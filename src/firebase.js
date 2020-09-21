import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtcsr8Fy615VXyf9MEoWMYPpIp3Kb2nac",
  authDomain: "whats-app-colne-77b5d.firebaseapp.com",
  databaseURL: "https://whats-app-colne-77b5d.firebaseio.com",
  projectId: "whats-app-colne-77b5d",
  storageBucket: "whats-app-colne-77b5d.appspot.com",
  messagingSenderId: "162948037031",
  appId: "1:162948037031:web:530cfa715bd1a1f22dde82",
  measurementId: "G-HYVDWV92WV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize app
const db = firebaseApp.firestore(); // for database
const auth = firebase.auth(); // for login
const provider = new firebase.auth.GoogleAuthProvider(); //google authentication

export { auth, provider };
export default db;
