import Background from "../../components/Background";
import Header from "../../components/Header/Header";
import FormContato from "./FormContato";
import { Container, Main } from "./style";
import { useEffect } from "react";
import * as util from '../../services/utils';
import {  useLocation } from 'react-router-dom';

const Contato = () => {
    const location = useLocation();
    useEffect(() => {
        const title = util.setTitlePage(location.pathname);
        document.title = title;
    },[location.pathname]);
    
    return(
        <Container>
            <Header />
            <Main>
                <Background />
                <div className="principal">
                    <FormContato />
                </div>
            </Main>
        </Container>
    );
}

export default Contato;