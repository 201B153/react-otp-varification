import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDiRYD4ZTABPQcW9JX8tJ4elL0nHO23qdM",
  authDomain: "react-otp-2bf81.firebaseapp.com",
  projectId: "react-otp-2bf81",
  storageBucket: "react-otp-2bf81.appspot.com",
  messagingSenderId: "730320634521",
  appId: "1:730320634521:web:be9d3eb39f88e521deee08"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
