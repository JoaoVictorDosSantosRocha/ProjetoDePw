import styled from "styled-components";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "./FireBase";
import "firebase/auth";
import { useAuthState } from "react-firebase9-hooks/auth";
import { SignInButton, SignInContainer } from "./Layout";


function SignIn() {
    const [user] = useAuthState(auth);
    console.log(user);
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    function signOut(){
        auth.signOut();
    }
    if(user) {
        return null;
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