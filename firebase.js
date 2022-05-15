// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAIW_yNIzPC1SvkYwIn839GIWNlLaOVyE",
  authDomain: "samplerecyclecoachapp.firebaseapp.com",
  projectId: "samplerecyclecoachapp",
  storageBucket: "samplerecyclecoachapp.appspot.com",
  messagingSenderId: "450916167501",
  appId: "1:450916167501:web:6b4103fb38fb21fb031104",
  measurementId: "G-T13M7VJBQQ"
};

app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth };
