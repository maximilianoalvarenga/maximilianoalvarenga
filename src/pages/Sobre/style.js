import styled from "styled-components";

export const Container = styled.main`
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

    .principal{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const Sidebar = styled.div`
    width: 25%;
    height: 85%;
    background-color: rgba(29, 43, 66, 0.98);
    border-radius: 30px;
    box-shadow: 0px 0px 25px 1px #1E8FFF;
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

export const Canvas = styled.canvas`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const MainContent = styled.section`
    width: 60%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .informacoes { 
        width: 100%;
        background-color: rgba(29, 43, 66, 0.98);
        border-radius: 30px;
        box-shadow: 0px 0px 25px 1px #1E8FFF;
    }

    .sobre {
        height: 35%;
    }

    .skills {
        height: 50%;
    }
`;