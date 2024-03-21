import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`

export const Footer = styled.footer`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DivDaLogo = styled.div`
    width: 200px;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;

    img {
        width: 18%;
    }
    
    p {
        color: #00000078;
    }

    @media (max-width: 600px) and (min-width: 201px) {
        width: 165px;

        p {
            font-size: 14px;
        }
    }
`

export const DivApps = styled.div`
    width: 300px;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 5%;

    img {
        cursor: pointer;
    }

    @media (max-width: 1000px) and (min-width: 601px) {
        width: 260px;
        img {
            width: 80%
        }
    }

    @media (max-width: 600px) and (min-width: 201px) {
        width: 210px;

        img {
            width: 90%
        }
    }
`