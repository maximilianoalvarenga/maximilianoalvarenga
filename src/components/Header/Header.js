import { HeaderComponent, LinksPages } from "./HeaderStyle";
import logo from '../../assets/logo.png';
import { useNavigate, useLocation} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const location = useLocation()

    const linksInformation = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Sobre',
            path: '/sobre'
        },
        {
            name: 'Portfolio',
            path: '/portfolio'
        },
        {
            name: 'Contato',
            path: '/contato'
        },
    ];
    return (
        <HeaderComponent>
            <img src={logo} alt='Logo página'/>
            <LinksPages>
                <ul>
                    { linksInformation.map(
                        (link) => 
                            link.path !== location.pathname
                            && <li onClick={ () => navigate(link.path)}>{link.name}</li>
                        )
                    }
                </ul>
            </LinksPages>
        </HeaderComponent>
    );
}

export default Header;