import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import Logo from "../images/twitter-icon-download-18.png";

const LoginPage = () => {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).then({
            
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <StyledLoginPage>
            <StyledLoginContainer>
                <img src={Logo} alt="login image"/>
                <h2>Sign in to twitter</h2>
                <Button onClick={signIn} type="submit">Sign in With Google</Button>
            </StyledLoginContainer>            
        </StyledLoginPage>
    )
}
const StyledLoginPage = styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    background-color: #f8f8f8;
    width: 100%;
`;
const StyledLoginContainer = styled.div`
    background-color: #fffdfd;
    height: 500px;
    width:500px;
    box-shadow: 3px 4px 4px 3px rgba(0,0,0,0.5);
    display:flex;
    padding:50px 30px;
    flex-direction:column;
    align-items:center;
    background: rgba( 255, 255, 255, 0.30 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 30px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    >img{
        height: 100px;
    }
    >h2{
        margin-top: 30px;
        font-size: 30px;
    }
    >button{
        margin-top: 100px;
        background-color: #1DA1F2;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 1rem;
        transition: all 0.4s ease;
        :hover{
            background-color:#fff;
            color: #1DA1F2;
            border: 2px solid #1DA1F2;
        }
    }
`;

export default LoginPage