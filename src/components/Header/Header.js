import { HeaderComponent } from "./HeaderStyle";
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <HeaderComponent>
            <img src={logo} alt='Logo página'/>
        </HeaderComponent>
    );
}

export default Header;