import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';

const App = () => {
  return (
    <Router>
      <div> {/* flex-col: diseño de columna */}
        <Header />
        <Routes>
          <Route path="/Portafolio" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
