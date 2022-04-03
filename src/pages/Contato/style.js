import styled from 'styled-components';

export const Container = styled.div`
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