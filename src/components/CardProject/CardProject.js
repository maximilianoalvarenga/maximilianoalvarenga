import { CardProjectStyle } from "./CardProject.style"

const CardProject = (props) => {
    const { dataCard } = props;
    return (
        <CardProjectStyle> 
            <span>{dataCard.name}</span>
        </CardProjectStyle>
    )
}

export default CardProject;