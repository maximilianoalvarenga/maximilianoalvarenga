import styled from "styled-components";


export const CardProfileStyle = styled.div`
    width: 35rem;
    height: 54.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FirstCicle = styled.div`
    width: 27rem;
    height: 65rem;
    display: flex;
    position: relative;
    top: 10%;
    justify-content: center;
    align-items: center;
    border-radius: 60%;
    background-color: rgba(0, 163, 254, 0.35);
    z-index: 1;
`;

export const SecondCicle = styled.div`
    width: 20rem;
    height: 20rem;
    background-color: #00A3FE;
    border-radius: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ThirdCicle = styled.div`
    width: 18rem;
    height: 18rem;
    background-color: silver;
    border-radius: 60%;

    background-image: url(${props => props.imgProfile});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const UserData = styled.div`
    width: 100%;
    height: 65rem;
    position: relative;
    top: -15%;
    background-color: rgba(29, 43, 66, 0.82);
    border-radius: 4%;
    display: flex;
    align-items: flex-end;

`;

export const InformationsUser = styled.div`
    height: 62%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
        color: #00A3FE;
        font-size: 2.2rem;
        font-weight: bold;
        position: relative;
        top: 3rem;
    }

    h2 {
        color: #00A3FE;
        font-size: 1.9rem;
        font-weight: bold;
        position: relative;
        top: 0.5rem;
    }
`;

export const SocialLinks = styled.div`
    height: 4.5rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: relative;
`;

export const LinkContainer = styled.a`
    height: 100%;
    width: 4.5rem;
    background-color: #00A3FE;
    border-radius: 50%;

    img {
        width: 4.5rem;
        height: 4.5rem;
        background-size: contain ;
    }
`;