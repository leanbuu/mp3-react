import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import NotFound404 from './component/NotFound404';
function App() {
return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            
          </ul>
        </nav>

        {/* Định nghĩa các route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
