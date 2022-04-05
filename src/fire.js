import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkAIxLBGS2u-xiaGGvmdhpPNyu-IYbqrs",
  authDomain: "palph-lauren.firebaseapp.com",
  projectId: "palph-lauren",
  storageBucket: "palph-lauren.appspot.com",
  messagingSenderId: "944260324142",
  appId: "1:944260324142:web:e2cea16ea5813b020838bf",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
