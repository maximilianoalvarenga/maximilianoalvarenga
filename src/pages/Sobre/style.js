import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
`;

export const Main = styled.div`
    width: 100%;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.96);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`;

export const Sidebar = styled.div`
    width: 25%;
    height: 85%;
    background-color: rgba(58,129,242, 0.3);
    border-radius: 20px 20px 0px 0px;
    border-bottom: 3px solid White;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .picture {
        border-radius: 20px;
        height: 50%;
        width: 90%;
        background-color: silver;
    }

    .dados {
        height: 40%;
        width: 90%;
    }
`;

export const MainContent = styled.section`
    width: 60%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .informacoes {
        width: 100%;
        background-color: rgba(58,129,242, 0.3);
        border-radius: 20px 20px 0px 0px;
        border-bottom: 3px solid White;
    }

    .sobre {
        height: 35%;
    }

    .skills {
        height: 50%;
    }
`;