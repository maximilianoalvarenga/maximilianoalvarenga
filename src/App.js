import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    );
  }
}
export default App;
