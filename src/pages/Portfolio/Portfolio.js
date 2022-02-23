import { useState } from 'react';
import CardProject from '../../components/CardProject/CardProject';
import Header from '../../components/Header/Header';
import { projects } from '../../services/informations';
import {
    ContainerCardsPortfolio,
    ContainerPortfolio,
    ContainerSearch,
    Main, 
    PortfolioStyle
} from "./Portfolio.Style"; 

const Portfolio = () => {
    const [tags, setTags] = useState([
        'React',
        'Java',
        'Desafios',
        'Node',
        'Frontend',
        'Backend',
    ])
    return (
        <PortfolioStyle>
           <Header />
           <Main>
               <ContainerPortfolio>
                    <ContainerSearch>
                        <div>
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
                                </label>
                    </ContainerSearch>
                    <ContainerCardsPortfolio>
                        <div className='tags'>
                            
                        </div>
                        <div className='cards'>
                        { projects.map((project) =>
                                <a href={project.url} target='_blank' rel="noreferrer">
                                    <CardProject dataCard={project} />
                                </a>
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