import Background from "../../components/Background";
import Header from "../../components/Header/Header";
import FormContato from "./FormContato";
import { Container, Main } from "./style";

const Contato = () => {
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