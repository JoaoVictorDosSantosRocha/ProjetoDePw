import React from "react"
import { Layout, Container, Header, LogoutButton, SignInContainer, SignInButton } from './Layout';
import './Chat.css'
import EstruturaChat from "./EstruturaChat";
import * as firebase from "firebase/app";
import SignIn from './SignIn';
import { auth } from "./FireBase"
import { useAuthState } from "react-firebase9-hooks/auth";

function Chat() {
    const [user] = useAuthState(auth);

    function logout() {
        auth.signOut();
    }
    return (
        <Layout>
        <Container>
        <Header>
            {user && 
            <LogoutButton onClick={logout}>
            Sair
            </LogoutButton>
            }
            </Header>
           {user ? <EstruturaChat/> : <SignIn />}
        </Container>
        </Layout>
    )
}

export default Chat;