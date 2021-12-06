import { Layout, Container, SignInContainer, SignInButton } from './Layout';
import './Chat.css'
import * as firebase from "firebase/app";
import SignIn from './SignIn';
import firebaseApp from './FireBase';
import React from "react"

function Chat() {
    return (
        <Layout>
        <Container>
            <SignIn />
        </Container>
        </Layout>
    )
}

export default Chat;