import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY9P-a0azGrBbYGxb-wpSlRDQfERz1Wos",
  authDomain: "facebook-clone-62628.firebaseapp.com",
  databaseURL: "https://facebook-clone-62628.firebaseio.com",
  projectId: "facebook-clone-62628",
  storageBucket: "facebook-clone-62628.appspot.com",
  messagingSenderId: "976728469087",
  appId: "1:976728469087:web:c833575b32bc84b9f8b5ea"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;