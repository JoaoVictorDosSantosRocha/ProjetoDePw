import styled from "styled-components";

export const Layout = styled.div`
width: 55vw;
height: 95vh;
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

export const Header = styled.header`
width: 100%;
display: flex;
height: 120px;
background: darkgrey;
align-items: center;
justify-content: flex-end;
`;

export const LogoutButton = styled.button`
font-size: 14px;
color: white;
background-color: red;
width: 200px;
height: 50px;
border: none;
cursor: pointer;
`;