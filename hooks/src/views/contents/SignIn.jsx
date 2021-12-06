import styled from "styled-components";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from "./FireBase";
import "firebase/auth";
import { SignInButton, SignInContainer } from "./Layout";


const auth = getAuth(firebaseApp);

function SignIn() {
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }
 return (
 <SignInContainer>
     <SignInButton onClick={signInWithGoogle}>
         Participar do Chat
         </SignInButton>
 </SignInContainer>
 );
}

export default SignIn;