import styled from "styled-components";

export const PortfolioStyle = styled.div`
    width: 100vw;
    height: 100vh;

`;

export const Main = styled.main`
    width: 100%;
    height: 89.9%;
    border-top: 0.1rem solid black;
    display: flex;
    justify-content: center;
    background-color: #1D2B42;
`;

export const ContainerPortfolio = styled.section`
    width: 80%;
    height: 89.9%;
    //background-color: green;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
`;

export const ContainerSearch = styled.div`
    width: 100%;
    height: 8%;

    //background-color: blue;
`;

export const ContainerCardsPortfolio = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    //background-color: red;

    .tags, .paginacao {
        text-align: center;
        width: 100%;
        height: 5%;
        //background-color: yellow;
    }

    .cards {
        width: 100%;
        height: 80%;
        //background-color: blue;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
    }

`;