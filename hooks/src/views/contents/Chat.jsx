import { Layout, Container, SignInContainer, SignInButton } from './Layout';
import './Chat.css'
import * as firebase from "firebase/app";
import SignIn from './SignIn';
import React from "react"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4j_HwotFriJ1iKMkS6_QzA5NGl9ECmOk",
    authDomain: "projetodepw.firebaseapp.com",
    projectId: "projetodepw",
    storageBucket: "projetodepw.appspot.com",
    messagingSenderId: "595562170853",
    appId: "1:595562170853:web:c3a1d46067f244fb39470c"
});

function Chat() {
    return (
        <Layout>
        <Container>
            <SignIn />
        </Container>
        </Layout>
    )
}

export default Chat