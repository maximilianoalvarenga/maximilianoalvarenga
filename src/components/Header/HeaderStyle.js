import styled from "styled-components";

export const HeaderComponent = styled.header`
    width: 100%;
    height: 8%;

    background-color: #1D2B42;
    color: #1E8FFF;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Yatra One', cursive;
    
    img {
        height: 4rem;
    }
`;

export const LinksPages = styled.div`
    height: 4rem;
    display: flex;
    align-items: flex-end;
    width: 50%;

    ul {
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: flex-end;
        height: 80%;

        li {
            margin: 0% 5%;
            font-size: 2rem;
            font-weight: bolder;
            cursor: pointer;
        }
    }
`;