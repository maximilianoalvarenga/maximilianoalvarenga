import { Routes as Teste, Route } from "react-router-dom";
import Contato from './pages/Contato';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

const Routes = () => {
    return (
        <Teste>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contato" element={<Contato />} />
        </Teste>
    )
}

export default Routes;