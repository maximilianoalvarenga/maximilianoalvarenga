import styled from "styled-components";
import background from '../../assets/Background.jpg';

export const HomeStyle = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;