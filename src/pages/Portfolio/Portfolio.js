import { useEffect, useRef } from 'react';
import CardProject from './CardProject/CardProject';
import Header from '../../components/Header/Header';
import { projects } from '../../services/informations';
import {
    Canvas,
    ContainerCardsPortfolio,
    ContainerPortfolio,
    ContainerSearch,
    Main, 
    PortfolioStyle
} from "./Portfolio.Style"; 


const Portfolio = () => {
     /*const [tags, setTags] = useState([
        'React',
        'Java',
        'Desafios',
        'Node',
        'Frontend',
        'Backend',
    ])*/
    const canvas123 = useRef(null);

    
    useEffect(() => {
        /**
         * Código reutilizado do repositório https://github.com/AmurKhoyetsyan/Tutorial-HTML-CSS-JS-SASS/tree/master/JAVASCRIPT/How%20to%20create%20Matrix%20Effect%20using%20pure%20HTML%20CSS%20JAVASCRIPT
         */
        const ctx = canvas123.current.getContext('2d');

        const str = "A+jk js:2 @dfs 17 tr YY ufds M5r P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: :";
        const matrix = str.split("");
        const font = 18;
        
        let arr = [];
        const width = canvas123.current.width = window.innerWidth;
        const height = canvas123.current.height = window.innerHeight;
        const col = width / font;

        for(let i = 0; i < col; i++) {
            arr[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = "#00A3FE";
            ctx.font = `${font}px system-ui`;
        
            for(let index = 0; index < arr.length; index++) {
                let txt = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(txt, index * font, arr[index] * font);
        
                if(arr[index] * font > height && Math.random() > 0.975) {
                    arr[index] = 0;
                }
                arr[index]++;
            }
        }
        
        setInterval(draw, 30);
    },[])


    return (
        <PortfolioStyle>
           <Header />
           <Main>
               <Canvas ref={canvas123}/>
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