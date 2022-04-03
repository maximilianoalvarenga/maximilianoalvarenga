import CardProject from './CardProject/CardProject';
import Header from '../../components/Header/Header';
import Background from '../../components/Background'
import { projects } from '../../services/informations';
import { useEffect } from "react";
import * as util from '../../services/utils';
import {  useLocation } from 'react-router-dom';

import {
    ContainerCardsPortfolio,
    ContainerPortfolio,
    ContainerSearch,
    Main, 
    PortfolioStyle
} from "./Portfolio.Style"; 


const Portfolio = () => {
    const location = useLocation();
    useEffect(() => {
        const title = util.setTitlePage(location.pathname);
        document.title = title;
    },[location.pathname]);
     /*const [tags, setTags] = useState([
        'React',
        'Java',
        'Desafios',
        'Node',
        'Frontend',
        'Backend',
    ])*/
    

    return (
        <PortfolioStyle>
           <Header />
           <Main>
               <Background />
               <ContainerPortfolio>
                    <ContainerSearch>
                       { /*<div>
                            <input type='text' />
                            <button type='button'>Buscar</button>
                        </div>
                        <label>
                            Filtro:
                            <select>
                                <option value='' selected></option>
                                { tags.map((tag) =>
                                    <option value={tag} key={tag}>{tag}</option>
                                )}
                            </select>
                        </label> */ }
                    </ContainerSearch>
                    <ContainerCardsPortfolio>
                        <div className='tags'>
                            
                        </div>
                        <div className='cards'>
                            { projects.map((project) =>
                                <CardProject dataCard={project} />
                            )}
                        </div>
                        <div className='paginacao'>
                            
                        </div>
                    </ContainerCardsPortfolio>
               </ContainerPortfolio>
           </Main> 
        </PortfolioStyle>
    )
}

export default Portfolio;