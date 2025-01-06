import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Proyectos } from './components/Proyectos';
import { Curriculum } from './components/Curriculum';
import { Header } from './components/Header';

const App = () => {
  return (
    <Router>
      <div> {/* flex-col: diseño de columna */}
        <Header />
        <Routes>
          <Route path="/Portafolio" element={<Home />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Proyectos" element={<Proyectos />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
