import React from "react"
import { Layout, Container, SignInContainer, SignInButton } from './Layout';
import './Chat.css'
import EstruturaChat from "./EstruturaChat";
import * as firebase from "firebase/app";
import SignIn from './SignIn';
import { auth } from "./FireBase"
import { useAuthState } from "react-firebase9-hooks/auth";

function Chat() {
    const [user] = useAuthState(auth);
    return (
        <Layout>
        <Container>
           {user ? <EstruturaChat/> : <SignIn />}
        </Container>
        </Layout>
    )
}

export default Chat;