import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`

export const Card = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 30px 80px 40px;

    img { 
        width: 100%;
        margin-bottom: 20px;
        position: relative;
        bottom: 36px;
    }

    p {
        font-weight: 600;
        margin-bottom: 20px;
        font-size: 17px;
        text-align: center;
    }
    
    button {
        width: 60%;
        height: 15%;
        border-radius: 15px;
        border: none;
        font-size: 16px;
        background-color: #FFBC0D;
        cursor: pointer;
    }

    a {
        color: #000000;
        text-decoration: none;
    }

    button:hover {
        background-color: #ffba0dae;
    }
`