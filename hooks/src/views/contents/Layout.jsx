import styled from "styled-components";

export const Layout = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const Container = styled.div`
width: 768px;
height: 100%;
background: darkgrey;
`;

export const SignInContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const SignInButton = styled.button`
font-size: 14px;
color: white;
background-color: blue;
width: 200px;
height: 50px;
border: none;
cursor: pointer;
`;