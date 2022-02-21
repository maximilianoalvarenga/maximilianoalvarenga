import { HeaderComponent, LinksPages } from "./HeaderStyle";
import logo from '../../assets/logo.png';
import { useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderComponent>
            <img src={logo} alt='Logo página'/>
            <LinksPages>
                <ul>
                    <li onClick={ () => navigate('/')}>Home</li>
                    <li onClick={ () => navigate('sobre')}>Sobre</li>
                    <li onClick={ () => navigate('portfolio')}>Portfolio</li>
                    <li onClick={ () => navigate('contato')}>Contato</li>
                </ul>
            </LinksPages>
        </HeaderComponent>
    );
}

export default Header;