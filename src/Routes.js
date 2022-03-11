import { Routes as Teste, Route } from "react-router-dom";
import Contato from './pages/Contato';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Sobre from './pages/Sobre/';

const Routes = () => {
    return (
        <Teste>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
        </Teste>
    )
}

export default Routes;