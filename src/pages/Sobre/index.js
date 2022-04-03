import { useEffect, useRef } from 'react';
import { Canvas, Container, Main, MainContent, Sidebar } from "./style";
import Header from '../../components/Header/Header';
import * as util from '../../services/utils';
import {  useLocation } from 'react-router-dom';

const Sobre = () => {
    const location = useLocation();
    const canvas123 = useRef(null);

    useEffect(() => {
        const title = util.setTitlePage(location.pathname);
        document.title = title;
    },[location.pathname]);
    
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

        
    },[]);

    
    return (
        <Container>
            <Header />
            
            <Main>
                <Canvas ref={canvas123}/>
                <div className='principal'>
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
                </div>
            </Main>
        </Container>
    );
}

export default Sobre;