import Header from "../../components/Header/Header";
import FormContato from "./FormContato";
import { Container, Main } from "./style";

const Contato = () => {
    return(
        <Container>
            <Header />
            <hr />
            <Main>
                <FormContato />
            </Main>
        </Container>
    );
}

export default Contato;