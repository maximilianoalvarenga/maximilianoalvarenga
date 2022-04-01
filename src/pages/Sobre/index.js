import { Container, Main, MainContent, Sidebar } from "./style";
import Header from '../../components/Header/Header';

const Sobre = () => {
    return (
        <Container>
            <Header />
            <Main>
                <MainContent>
                    <article className="informacoes sobre">

                    </article>
                    <article className="informacoes skills">
                        
                    </article>
                </MainContent>
                <Sidebar>
                    <div className="picture">

                    </div>
                    <div className="dados">
                        
                    </div>
                </Sidebar>
            </Main>
        </Container>
    );
}

export default Sobre;