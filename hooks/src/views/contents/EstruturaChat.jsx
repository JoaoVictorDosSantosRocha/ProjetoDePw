import { useState } from "react";
import styled from "styled-components";
import { addDoc, collection, Firestore, query, orderBy } from "@firebase/firestore";
import { firestore } from "./FireBase";
import { getFirestore } from "@firebase/firestore";
import { auth } from "./FireBase"
import { useAuthState } from "react-firebase9-hooks/auth";
import { useCollectionData } from "react-firebase9-hooks/firestore";

const Messages = styled.div`
display: flex;
height: calc(100% - 120px);
flex-direction: column;
justify-content: flex-end;
`;

const MessageContainer = styled.div`
width: 100%;
display: flex;
flex-direction: ${props => props.isMine && "row-reverse"};
align-items: center;
`;

const Message = styled.div`
width: 300px;
background: lightGrey;
border-radius: 25px;
padding: 10px;
margin: 8px;
`;

const Avatar = styled.img`
width: 35px;
height: 35px;
border-radius: 50%;
margin-right: 5px;
margin-left: 5px;
`;

const SendMessagesContainer = styled.form`
width: 100%;
height: 120px;
display: flex;

`;

const Input = styled.input`
width: 80%;
background: white;
border: none;
border: 0;
font-size: 28px;

`;

const Send = styled.button`
width: 20%;
background: lightgreen;
border: none;
`;

function EstruturaChat() {
    const [formValue, setFormValue] = useState("");
    const [user] = useAuthState(auth);
    const messagesRef = collection(firestore, "messages");
    const [messages] = useCollectionData(query(messagesRef, orderBy("createdAt")));


    function sendMessage(e) {
        const { uid, displayName, photoURL } = user;
        e.preventDefault();

        console.log(user);
        addDoc(collection(firestore, "messages"), {
            text: formValue,
            createdAt: new Date(),
            uid,
            displayName,
            photoURL,
        });

        setFormValue("");
    }

 return (<>
<Messages>
    {messages && messages.map((msg) => 
    <MessageContainer isMine={msg.uid === user.uid}>
        <Avatar src={msg.photoURL}/>
        <Message>
            {msg.text}
        </Message>
    </MessageContainer>
    )}
    <SendMessagesContainer onSubmit={sendMessage}>
        <Input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <Send>Enviar</Send>
    </SendMessagesContainer>
</Messages>
 </>);
}

export default EstruturaChat;