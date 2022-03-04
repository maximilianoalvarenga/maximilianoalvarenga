import React from 'react';
import { Routes, Route } from "react-router-dom";
import Contato from './pages/Contato';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    );
  }
}
export default App;
