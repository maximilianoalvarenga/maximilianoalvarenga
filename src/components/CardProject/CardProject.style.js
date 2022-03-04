import styled from "styled-components";

export const CardProjectStyle = styled.div`
    transform-style: preserve-3d;
    ${props => props.flip && 'transform: rotateY(180deg)'};
    display: flex;
    transition: all .5s;
    height: 20rem;
    width: 25rem;
    margin: 5px;
    color: #1D2B42;

    
    #front, #back {
        border-radius: 2rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    #front {
        background-color: #1E8FFF;
        transform: rotateY(180deg);
        display: ${props => props.flip ? 'flex' : 'none'};
        flex-direction: column;
        color: white;

        a:link,
        a:visited,
        a:hover,
        a:active {
            color: #1D2B42;
            text-decoration:none
        }
    }   

    #back {
        cursor: pointer;
        background-color: #21B1FF;
        display: ${props => !props.flip ? 'flex' : 'none'};
    }
`;