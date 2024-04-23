import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`
export const Header = styled.header`
    height: 12vh;
    display: flex;
    justify-content: space-between;

    section {
        width: 32vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 1.5vw;
    }

    div {
        width: 40%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        cursor: pointer;
    }

    p {
        font-size: 12px;
    }

    strong {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: black;
    }


    @media (max-width: 1000px) and (min-width: 601px) {
       section{
        width: 50vw;
       }
    }

    @media (max-width: 600px) and (min-width: 201px) {

        padding: 0 10px;
        section{
            width: 65vw;
        }
    }
`

export const Logo = styled.img`
    width: 3.5vw;
    margin-left: 3vw;
    cursor: pointer;

    @media (max-width: 1000px) and (min-width: 601px) {
        width: 4.5vw;
    }

    @media (max-width: 600px) and (min-width: 201px) {
        width: 8vw;
    }
`

export const DivFundoAmarelo = styled.div`
    background-color: #FFC72C;
    display: flex;
    justify-content: space-around;
    padding: 10px;

    p{
       font-size: 9.5px;
    }
`