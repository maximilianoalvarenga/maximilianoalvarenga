import Header from '../../components/Header/Header';
import {
    ContainerCardsPortfolio,
    ContainerPortfolio,
    ContainerSearch,
    Main, 
    PortfolioStyle
} from "./Portfolio.Style";

const Portfolio = () => {
    return (
        <PortfolioStyle>
           <Header />
           <Main>
               <ContainerPortfolio>
                    <ContainerSearch>
                       <input type='text' />
                    </ContainerSearch>
                    <ContainerCardsPortfolio>
                           teste
                    </ContainerCardsPortfolio>
               </ContainerPortfolio>
           </Main>
        </PortfolioStyle>
    )
}

export default Portfolio;