import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Proyectos } from './components/Proyectos';
import { Curriculum } from './components/Curriculum';
import { Contacto } from './components/Contacto';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen"> {/* flex-col: diseño de columna */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
