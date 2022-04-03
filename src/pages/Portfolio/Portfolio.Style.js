import styled from "styled-components";

export const PortfolioStyle = styled.div`
    width: 100vw;
    height: 100vh;

`; 

export const Main = styled.main`
    width: 100%;
    height: 91.9%;
    border-top: 0.1rem solid black;
    display: flex;
    justify-content: center;
    background-color: rgba(1, 31, 160, 0.89);
    position: relative;
`;

export const Canvas = styled.canvas`
    position: absolute;
    width: 100%;
    height: 100%;
`
export const ContainerPortfolio = styled.section`
    position: absolute;
    width: 80%;
    height: 89.9%;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    background-color: transparent;
`;

export const ContainerSearch = styled.div`
    width: 100%;
    height: 8%;
    color: #00A3FE; 
    display: flex;
    justify-content: space-evenly;
    height: 6%;

    div {
        height: 100%;
        width: 40%;
        display: flex;
        align-items: center;

        input {
            height: 80%;
            width: 75%;
            border-bottom-left-radius: 1rem;
            border-top-left-radius: 1rem;
        }

        button {
            color: #00A3FE;
            font-size: 1.6rem;
            font-weight: bold; 
            height: 90%;
            width: 20%;
            border-bottom-right-radius: 1rem;
            border-top-right-radius: 1rem;
        }
    }

    label {
        font-size: 1.6rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        width: 30%;
        display: flex;
        justify-content: space-evenly;

        select {
            height: 80%;
            width: 80%;
            text-align: center;
        }
    }
`;

export const ContainerCardsPortfolio = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .tags, .paginacao {
        text-align: center;
        width: 100%;
        height: 5%;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }
`;