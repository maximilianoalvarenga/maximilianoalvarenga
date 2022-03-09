import styled from 'styled-components';

export const Container = styled.form`
    width: 60%;
    height: 90%;
    background-color: rgba(58,129,242, 0.3);
    color: #00A3FE;
    font-size: 1.8rem;
    font-weight: bold;
    border-radius: 0.7rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    
    span {
        margin-bottom: 0.5rem;
    }
    #inputs {
        margin: 0 auto;
        width: 95%;
        height: 30%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        label {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 45%;
            height: 40%;

            input {
                width: 90%;
                height: 3rem;
                border-radius: 2rem;
                font-size: 1.6rem;
                font-weight: bold;
                text-align: center ;
            }

            input[name='telefone'] {
                width: 40% ;
            }
        }
    }

    #textarea {
        margin: 0 auto;
        width: 95%;
        height: 35%;
        
        label {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            width: 100%;
            height: 100%;

            textarea {
                width: 100%;
                height: 85%;
                border-radius: 2rem;
                resize: none;
                font-size: 1.6rem;
                font-weight: bold;
                text-align: center ;
                padding: 1rem 0rem;
            }
        }
    }

    #btn-submit {
        height: 8%;
        display: flex;
        justify-content: center;
    }
    
`;

export const Button = styled.button`
    height: 100%;
    width: 18%;
    border-radius: 0.7rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #00A3FE;
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
    background-color: ${props => (props.disabled ? '#ffffff' : '#1D2B42')};
`;