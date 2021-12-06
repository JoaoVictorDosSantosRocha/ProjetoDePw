import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4j_HwotFriJ1iKMkS6_QzA5NGl9ECmOk",
    authDomain: "projetodepw.firebaseapp.com",
    projectId: "projetodepw",
    storageBucket: "projetodepw.appspot.com",
    messagingSenderId: "595562170853",
    appId: "1:595562170853:web:c3a1d46067f244fb39470c"
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export default firebaseApp;