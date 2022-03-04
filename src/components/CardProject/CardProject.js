import { useState } from "react";
import { CardProjectStyle } from "./CardProject.style"

const CardProject = (props) => {
    const { dataCard } = props;
    const [ flip, setFlip ] = useState(false);

    const handleClick = () =>{
        const aux = flip;
        setFlip(!aux);
    }

    
    return (
        <CardProjectStyle flip={flip} > 
            <div id='front'onMouseLeave={handleClick}>
                <span>
                    Link Demo:&nbsp;
                    <a
                        href={dataCard.urlProd}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {dataCard.name}
                    </a>
                </span>
                <span>
                    Link Repo:&nbsp;
                    <a
                        href={dataCard.urlRepo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {dataCard.repoName}
                    </a>
                </span>
            </div>
            <div id='back' onClick={handleClick}>
                <span>{dataCard.name}</span>
            </div>
        </CardProjectStyle>
    )
}

export default CardProject;