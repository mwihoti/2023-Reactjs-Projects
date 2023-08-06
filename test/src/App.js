import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav_bar from './components/inc/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Pricing from './components/pages/Pricing';
import Contact from './components/pages/contact';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav_bar />

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
