import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBpigc01cmc0G_KlNzLwNJyCnzChZXSatA",
    authDomain: "dsa-4cd77.firebaseapp.com",
    projectId: "dsa-4cd77",
    storageBucket: "dsa-4cd77.appspot.com",
    messagingSenderId: "889600680332",
    appId: "1:889600680332:web:f06f09023744010dd036a9",
    measurementId: "G-1LLV7MQ84E"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };
