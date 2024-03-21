import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`
export const SectionInicial = styled.section`
    height: 62vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 7vw;
    background-color: #FFC72C;
    padding-top: 25vh;

    img {
        width: 23vw;
    }

    p {
        width: 38vw;
        height: 17vh;
        font-size: 4vw;
        font-weight: 600;
        text-transform: uppercase;
        color: #ffffff;
    }
    strong {
        color: #DB0007;
    }

    @media (max-width: 1000px) and (min-width: 601px) {
        padding-top: 4vh;

        img {
            margin-top: 105px;
            width: 30vw;
        }

        p{
            font-size: 6vw;  
        }
    }

    @media (max-width: 600px) and (min-width: 201px) {
        flex-direction: column;
       
        img {
            width: 30vw;
        }

        p{
            width: 60vw;
            font-size: 6vw;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 40px;
        }
    }
`

export const SectionProdutos = styled.section`
    height: 26vh;
    background-color: #FFC72C;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 400px;
        display: flex;
        justify-content: space-between;
    }

    img {
        cursor: pointer;
    }

    img:hover {
        padding-bottom: 40px;
    }

    @media (max-width: 1000px) and (min-width: 601px) {
        div{
            width: 350px;
        }
    }

    @media (max-width: 600px) and (min-width: 201px) {
        div{
            width: 320px;
        }

        img {
            width: 18vw;
        }

    }
`

export const SectionPromocao = styled.section`
    background-color: #FEB706;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
    
    
    h2 {
        color: #ffffff;
        font-size: 35px;
        margin-top: 70px;;
        margin-bottom: 30px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
`